<?php

namespace Drupal\cn_core\Form;

use Drupal\Core\Datetime\DateFormatterInterface;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Drupal\Core\Url;

/**
 * A form to let a teacher schedule an absence and a substitute.
 */
class QueryParamBuilderForm extends FormBase implements ContainerInjectionInterface {

  /**
   * The entity type manager interface.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * A route-matching interface.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   */
  protected $currentRouteMatch;

  /**
   * A service we can use to format dates.
   *
   * @var \Drupal\Core\Datetime\DateFormatterInterface
   */
  protected $dateFormatter;

  /**
   * The currently active request object.
   *
   * @var \Symfony\Component\HttpFoundation\Request
   */
  protected $request;

  /**
   * QueryParamBuilderForm constructor.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   An entity type manager.
   * @param \Drupal\Core\Routing\RouteMatchInterface $currentRouteMatch
   *   A route-matching interface.
   * @param \Drupal\Core\Datetime\DateFormatterInterface $dateFormatter
   *   A service we can use to format dates.
   * @param \Symfony\Component\HttpFoundation\RequestStack
   *   The request stack.
   */
  public function __construct(
    EntityTypeManagerInterface $entityTypeManager,
    RouteMatchInterface $currentRouteMatch,
    DateFormatterInterface $dateFormatter,
    RequestStack $request_stack
  ) {
    $this->entityTypeManager = $entityTypeManager;
    $this->currentRouteMatch = $currentRouteMatch;
    $this->dateFormatter = $dateFormatter;
    $this->request = $request_stack->getCurrentRequest();
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager'),
      $container->get('current_route_match'),
      $container->get('date.formatter'),
      $container->get('request_stack')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'query_param_builder_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['#attributes']['class'][] = 'query-param-builder-form';

    $form['actions'] = [
      '#type' => 'actions',
    ];

    $form['start_date'] = [
      '#type' => 'date',
      '#title' => $this->t('Start Date'),
    ];

    $form['end_date'] = [
      '#type' => 'date',
      '#title' => $this->t('End Date'),
    ];

    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    $form['#submit'][] = [$this, 'submitForm'];

    $form['#after_build'][] = [$this, 'afterBuild'];

    return $form;
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   * @return mixed
   */
  public function afterBuild($form, FormStateInterface $form_state) {
    // Make the form use GET instead of POST. Remove form IDs from form
    // structure to prevent them from appearing in the URL.
    $form['#method'] = 'GET';
    unset($form['form_build_id']);
    unset($form['form_id']);
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
  }

}
