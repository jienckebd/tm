<?php

/**
 * @file
 * Contains \Drupal\ga_push_form_validate\Form\GAPushFormValidateSettingsForm.
 */

namespace Drupal\ga_push_form_validate\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class GAPushFormValidateSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'ga_push_form_validate_settings_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('ga_push_form_validate.settings');

    $form['form_list'] = array(
      '#type' => 'textarea',
      '#title' => $this->t('Active forms'),
      '#default_value' => $config->get('form_list'),
      '#rows' => 10,
      '#description' => t('Insert the form ids to be logged on validate by line. You can use regular expressions.'),
    );

    $form['show_form_ids'] = array(
      '#type' => 'checkbox',
      '#title' => t('Show form ids'),
      '#default_value' => $config->get('show_form_ids'),
    );

    return parent::buildForm($form, $form_state);
  }

  // @TODO Validate

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
  $this->config('ga_push_form_validate.settings')
    ->set('form_list', $form_state->getValue('form_list'))
    ->set('show_form_ids', $form_state->getValue('show_form_ids'))
    ->save();

    parent::submitForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['ga_push_form_validate.settings'];
  }

}
