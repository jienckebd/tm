<?php

namespace Drupal\cn_core\Plugin\Condition;

use Drupal\rules\Core\RulesConditionBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'Data value is empty' condition.
 *
 * @Condition(
 *   id = "user_is_logged_in",
 *   label = @Translation("User is logged in"),
 *   category = @Translation("Data")
 * )
 */
class UserIsLoggedIn extends RulesConditionBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    $default_config = parent::defaultConfiguration();
    $default_config['allow_ajax'] = FALSE;
    return $default_config;
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['allow_ajax'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Always allow ajax'),
      '#default_value' => $this->configuration['allow_ajax'],
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    $allow_ajax = $form_state->getValue('allow_ajax');
    if (!empty($allow_ajax)) {
      $this->configuration['allow_ajax'] = $allow_ajax;
    }
    parent::submitConfigurationForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function evaluate() {
    if ($this->configuration['allow_ajax'] == TRUE) {
      $request = \Drupal::request();
      $is_ajax = $request->isXmlHttpRequest();
      if ($is_ajax) {
        if ($this->configuration['negate']) {
          return FALSE;
        }
        else {
          return TRUE;
        }
      }
    }
    if (\Drupal::currentUser()->isAnonymous()) {
      return FALSE;
    }
    return TRUE;
  }

}
