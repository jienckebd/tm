<?php

namespace Drupal\cn_core\Form;

use Drupal\Core\Form\FormStateInterface;
use Drupal\user\Form\UserLoginForm as Base;
use Drupal\cn_core\Form\Traits\Ajax;

/**
 * Provides a user login form.
 *
 * @internal
 */
class UserLoginForm extends Base {
  use Ajax;

  /**
   * Provides config to the ajax form trait handlers.
   */
  const AJAX_CONFIG = [
    'submit_success' => [
      'redirect' => [
        'system.admin_content' => [
          'role' => [
            'administrator',
            'client_administrator',
          ],
        ],
        '<front>' => TRUE,
      ],
    ],
    'submit_fail' => [
      'smooth_scroll' => TRUE,
    ],
  ];

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $this->setFormAjax($form, $form_state);
    $form = parent::buildForm($form, $form_state);

    $form['account'] = [
      '#type' => 'details',
      '#title' => $this->t('Account Information'),
      '#open' => TRUE,
    ];

    $form['account']['name'] = $form['name'];
    $form['account']['pass'] = $form['pass'];

    unset($form['name']);
    unset($form['pass']);

    $this->addAjaxToElement($form, $form['actions']['submit']);

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $account = $this->userStorage->load($form_state->get('uid'));
    user_login_finalize($account);
  }

}
