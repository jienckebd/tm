<?php

/**
 * @file
 * Contains \Drupal\entityform_block\Plugin\Block\EntityEditFormBlock.
 */

namespace Drupal\cn_display\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
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
 *   id = "custom_form_block",
 *   admin_label = @Translation("Custom form"),
 *   category = @Translation("Forms")
 * )
 */
class CustomFormBlock extends BlockBase {
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
   * CustomFormBlock Constructor.
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
      'form_class' => '',
      'form_args' => '',
    );
  }
  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $this->setFormAjax($form, $form_state);

    $form['form_class'] = array(
      '#title' => $this->t('Form Class'),
      '#description' => $this->t('Enter the form class.'),
      '#type' => 'textfield',
      '#default_value' => !empty($this->configuration['form_class']) ? $this->configuration['form_class'] : NULL,
    );

    $form['form_args'] = array(
      '#title' => $this->t('Form Args'),
      '#description' => $this->t('Enter a comma separated list of arguments that will be passed to the form.'),
      '#type' => 'textfield',
      '#default_value' => !empty($this->configuration['form_args']) ? $this->configuration['form_args'] : NULL,
    );

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['form_class'] = $form_state->getValue('form_class');
    $this->configuration['form_args'] = $form_state->getValue('form_args');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    return $this->formBuilder->getForm($this->configuration['form_class']);
  }

}
