<?php

namespace Drupal\cn_core\Plugin\Action;

use Drupal\views_bulk_operations\Action\ViewsBulkOperationsActionBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Plugin\PluginFormInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Form\FormState;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Entity\ContentEntityInterface;
use Psr\Log\LoggerInterface;
use Drupal\Component\EventDispatcher\ContainerAwareEventDispatcher;

/**
 * Bulk update any field on any entity.
 *
 * @Action(
 *   id = "entity_field_update",
 *   label = @Translation("Bulk Update"),
 * )
 */
class EntityFieldUpdate extends ViewsBulkOperationsActionBase implements ContainerFactoryPluginInterface, PluginFormInterface {

  /**
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The current user.
   *
   * @var \Drupal\Core\Session\AccountInterface
   */
  protected $currentUser;

  /**
   * User module config.
   *
   * @var \Drupal\Core\Config\ImmutableConfig
   */
  protected $userConfig;

  /**
   * Module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * The logger.
   *
   * @var \Psr\Log\LoggerInterface
   */
  protected $logger;

  /**
   * @var \Drupal\Component\EventDispatcher\ContainerAwareEventDispatcher
   */
  protected $eventDispatcher;

  /**
   * TransactionProcess constructor.
   *
   * @param array $configuration
   *   Plugin configuration.
   * @param string $plugin_id
   *   The plugin Id.
   * @param mixed $plugin_definition
   *   Plugin definition.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\Core\Session\AccountInterface $currentUser
   *   The current user.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $configFactory
   *   The config factory object.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $moduleHandler
   *   Module handler service.
   * @param \Drupal\Component\EventDispatcher\ContainerAwareEventDispatcher $event_dispatcher
   *   The event dispatcher.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, EntityTypeManagerInterface $entity_type_manager, AccountInterface $currentUser, ConfigFactoryInterface $configFactory, ModuleHandlerInterface $moduleHandler, LoggerInterface $logger, ContainerAwareEventDispatcher $event_dispatcher) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->entityTypeManager = $entity_type_manager;
    $this->currentUser = $currentUser;
    $this->userConfig = $configFactory->get('user.settings');
    $this->moduleHandler = $moduleHandler;
    $this->logger = $logger;
    $this->eventDispatcher = $event_dispatcher;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('entity_type.manager'),
      $container->get('current_user'),
      $container->get('config.factory'),
      $container->get('module_handler'),
      $container->get('logger.channel.cn_core'),
      $container->get('event_dispatcher')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function execute(ContentEntityInterface $entity = NULL) {
    if (empty($entity)) {
      return;
    }

    $entity_saved = FALSE;
    if (!empty($this->configuration['default_value_input'])
      && is_array($this->configuration['default_value_input'])) {
      foreach ($this->configuration['default_value_input'] as $field_name => $field_value) {
        if (!empty($field_value) || ($field_value === 0)) {
          $entity->set($field_name, $field_value);
          $entity_saved = TRUE;
        }
      }
    }

    if ($entity_saved == TRUE) {
      try {
        if ($entity->hasField('changed')) {
          $entity->set('changed', REQUEST_TIME);
        }
        $entity->save();
      }
      catch (\Exception $e) {
        $this->logger->error('Error processing action @action_id on entity type @entity_type of @entity_id.', [
          '@action_id' => $this->pluginId,
          '@entity_type' => $entity->getEntityTypeId(),
          '@entity_id' => $entity->id(),
        ]);
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {

    $entity_type_id = 'node';
    $bundle = 'article';
    $entity_field_definitions = \Drupal::service('entity.field_manager')->getFieldDefinitions($entity_type_id, $bundle);
    $bulk_update_fields = [];
    foreach ($entity_field_definitions as $id => $field_definition) {
      $bulk_update_fields[$field_definition->getName()] = $field_definition->label();
    }

    $entity_type = $this->entityTypeManager->getDefinition($entity_type_id);

    $entity_default_values = [];
    if (!empty($bundle)) {
      $entity_default_values[$entity_type->getKey('bundle')] = $bundle;
    }

    try {
      /** @var \Drupal\Core\Entity\ContentEntityInterface $temp_entity */
      $temp_entity = $this->entityTypeManager->getStorage($entity_type_id)
        ->create($entity_default_values);
    }
    catch (\Exception $e) {
      $this->logger->error('Error generating temporary entity of type @entity_type on action @action_id.', [
        '@action_id' => $this->pluginId,
        '@entity_type' => $entity_type_id,
      ]);
      drupal_set_message($this->t('There was an error generating the form. Please contact support.'), 'error');
      $form['actions']['#access'] = FALSE;
      return $form;
    }

    $form['entity_field_value'] = [
      '#type' => 'details',
      '#open' => TRUE,
      '#title' => $this->t('Configure Values'),
      '#tree' => TRUE,
    ];

    foreach ($bulk_update_fields as $field_name => $field_label) {
      if ($field = $temp_entity->getFieldDefinition($field_name)) {
        $temp_form_element = [];
        $temp_form_state = new FormState();
        $form['entity_field_value'][$field_name] = $temp_entity->get($field_name)
          ->defaultValuesForm($temp_form_element, $temp_form_state);
      }
    }

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function access($entity, AccountInterface $account = NULL, $return_as_object = FALSE) {
    /** @var \Drupal\Core\Entity\EntityInterface $entity */
    return $entity->access('update', $account, $return_as_object);
  }

}
