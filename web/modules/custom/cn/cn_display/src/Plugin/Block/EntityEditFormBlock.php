<?php

/**
 * @file
 * Contains \Drupal\entityform_block\Plugin\Block\EntityEditFormBlock.
 */

namespace Drupal\cn_display\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\user\EntityOwnerInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\cn_core\Form\Traits\Ajax;
use Drupal\Core\Entity\EntityFieldManagerInterface;

/**
 * Provides a block for creating a new content entity.
 *
 * @Block(
 *   id = "entity_form_block",
 *   admin_label = @Translation("Entity form"),
 *   category = @Translation("Forms")
 * )
 */
class EntityEditFormBlock extends BlockBase {
  use Ajax;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The entity field manager.
   *
   * @var \Drupal\Core\Entity\EntityFieldManagerInterface
   */
  protected $entityFieldManager;

  /**
   * The route match service.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   */
  protected $routeMatch;

  /**
   * The form builder.
   *
   * @var \Drupal\Core\Form\FormBuilderInterface
   */
  protected $formBuilder;

  /**
   * The entity being created or edited.
   *
   * @var \Drupal\Core\Entity\EntityInterface
   */
  protected $entity;

  /**
   * HeroBlock Constructor.
   *
   * @param array $configuration
   *   The plugin configuration, i.e. an array with configuration values keyed
   *   by configuration option name. The special key 'context' may be used to
   *   initialize the defined contexts by setting it to an array of context
   *   values keyed by context names.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\Core\Entity\EntityFieldManagerInterface $entity_field_manager
   *   The entity field manager.
   * @param \Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The route match service.
   * @param \Drupal\Core\Form\FormBuilderInterface $form_builder
   *   The form builder.
   */
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition,
    EntityTypeManagerInterface $entity_type_manager = NULL,
    EntityFieldManagerInterface $entity_field_manager = NULL,
    RouteMatchInterface $route_match = NULL,
    FormBuilderInterface $form_builder = NULL
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->entityTypeManager = $entity_type_manager ?: \Drupal::entityTypeManager();
    $this->entityFieldManager = $entity_field_manager ?: \Drupal::service('entity_field.manager');
    $this->routeMatch = $route_match ?: \Drupal::routeMatch();
    $this->formBuilder = $form_builder ?: \Drupal::formBuilder();
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
      $container->get('entity_field.manager'),
      $container->get('current_route_match'),
      $container->get('form_builder')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return array(
      'entity_type' => '',
      'bundle' => '',
      'form_mode' => '',
      'route_param' => '',
    );
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $this->setFormAjax($form, $form_state);

    // Get content entity types.
    /** @var \Drupal\Core\Entity\ContentEntityTypeInterface[] $content_entity_types */
    $content_entity_types = [];
    foreach ($this->entityTypeManager->getDefinitions() as $entity_type_id => $entity_type_definition) {
      if ($entity_type_definition->getGroup() == 'content') {
        $content_entity_types[$entity_type_id] = $entity_type_definition;
      }
    }
    $options = array();
    foreach ($content_entity_types as $type_key => $entity_type) {
      // Entities that do not declare a form class.
      // Exclude Comment entities as they have to be attached to another entity.
      if (!$entity_type->hasFormClasses() || $type_key == 'comment') {
        continue;
      }
      // Get all bundles for current entity type.
      $entity_type_bundles = \Drupal::entityManager()->getBundleInfo($type_key);
      foreach ($entity_type_bundles as $bundle_key => $bundle_info) {
        // Personal contact form requires a user recipient to be specified.
        if ($bundle_key == 'personal' && $type_key == 'contact_message') {
          continue;
        }
        $options[(string) $entity_type->getLabel()][$type_key . '.' . $bundle_key] = $bundle_info['label'];
      }
    }

    $form['entity_type_bundle'] = array(
      '#title' => $this->t('Entity Type + Bundle'),
      '#type' => 'select',
      '#options' => $options,
      '#required' => TRUE,
      '#default_value' => $this->configuration['entity_type'] . '.' . $this->configuration['bundle'],
    );

    $form['route_param'] = array(
      '#title' => $this->t('Route Param ID'),
      '#description' => $this->t('If this is for an existing entity, enter the route parameter to check for the entity. Otherwise, leave this field empty to create a new entity.'),
      '#type' => 'textfield',
      '#default_value' => !empty($this->configuration['route_param']) ? $this->configuration['route_param'] : NULL,
    );

    $form['form_mode'] = array(
      '#title' => $this->t('Form Mode'),
      '#description' => $this->t('Select a form mode.'),
      '#type' => 'textfield',
      '#default_value' => !empty($this->configuration['form_mode']) ? $this->configuration['form_mode'] : NULL,
    );

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $selected_entity_type_bundle = $form_state->getValue('entity_type_bundle');
    $values = explode('.', $selected_entity_type_bundle);
    $this->configuration['entity_type'] = $values[0];
    $this->configuration['bundle'] = $values[1];
    $this->configuration['route_param'] = $form_state->getValue('route_param');
    $this->configuration['form_mode'] = $form_state->getValue('form_mode');
  }

  /**
   * Helper function to set the entity.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function setEntity() {

    $route_param = $this->configuration['route_param'];
    if (!empty($route_param)) {
      $entity = $this->routeMatch
        ->getParameter($route_param);
    }
    $values = [];

    if (empty($entity)) {
      if ($this->entityTypeManager->getDefinition($this->configuration['entity_type'])->hasKey('bundle')) {
        $bundle_key = $this->entityTypeManager->getDefinition($this->configuration['entity_type'])->getKey('bundle');
        $values = array($bundle_key => $this->configuration['bundle']);
      }
      $entity = $this->entityTypeManager
        ->getStorage($this->configuration['entity_type'])
        ->create($values);
      if ($entity instanceof EntityOwnerInterface) {
        $entity->setOwnerId(\Drupal::currentUser()->id());
      }
    }
    $this->entity = $entity;
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $this->setEntity();

    $form_mode = !empty($this->configuration['form_mode']) ? $this->configuration['form_mode'] : 'default';

    return \Drupal::service('entity.form_builder')->getForm($this->entity, $form_mode);
  }
}
