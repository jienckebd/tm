<?php

namespace Drupal\cn_core\Form\User;

use Drupal\Core\Form\FormStateInterface;
use Drupal\user\RegisterForm as Base;
use Drupal\cn_core\Form\Traits\Ajax;

/**
 * Form handler for the user register forms.
 *
 * @internal
 */
class RegisterForm extends Base {
  use Ajax;

  /**
   * Provides config to the ajax form trait handlers.
   */
  const AJAX_CONFIG = [
    'submit_success' => [
      'redirect' => [
        'route_name' => '<front>',
      ],
    ],
    'submit_fail' => [
      'smooth_scroll' => TRUE,
    ],
  ];

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $this->setFormAjax($form, $form_state);
    $form = parent::form($form, $form_state);
    $form['#process'][] = [$this, 'processUserRegisterForm'];
    return $form;
  }

  /**
   * Processes entity form.
   *
   * @param array $element
   *   The form element to process.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   * @param array $complete_form
   *   The complete form structure.
   *
   * @return array
   *   The processed element.
   *
   * @throws \InvalidArgumentException
   *   Thrown when #available_countries or #used_fields is malformed.
   */
  public function processUserRegisterForm(array &$element, FormStateInterface $form_state, array &$complete_form) {
    $this->addAjaxToElement($element, $element['actions']['submit']);
    return $element;
  }

}
