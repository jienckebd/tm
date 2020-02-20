<?php

namespace Drupal\cn_core\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Form\FormState;

/**
 * A form to filter lists of classes.
 */
class EntityFieldForm extends FormBase {
  use AjaxFormTrait;

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'entity_field_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $arg1 = NULL, $arg2 = NULL) {
    $this->setFormAjax($form, $form_state);

    /** @var \Drupal\Core\Entity\ContentEntityInterface $entity */
    $entity = $arg1;
    /** @var array $field_names */
    $field_names = $arg2;

    $form_state->set('entity', $entity);
    $form_state->set('field_names', $field_names);

    $form['entity_field'] = [
      '#type' => 'container',
    ];

    // Loop through all fields and add their default field widgets to form.
    foreach ($field_names as $field_name) {
      $temp_form_element = [];
      $temp_form_state = new FormState();

      // Add the entity form field widget.
      $form['entity_field'][$field_name] = $entity->get($field_name)
        ->defaultValuesForm($temp_form_element, $temp_form_state);
    }

    $form['actions'] = [
      '#type' => 'actions',
    ];

    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Save'),
    ];
    $this->addAjaxToElement($form, $form['actions']['submit'], NULL, $this->t('Saving...'));

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    /** @var \Drupal\Core\Entity\ContentEntityInterface $entity */
    $entity = $form_state->get('entity');
    /** @var array $field_names */
    $field_names = $form_state->get('field_names');

    $default_value_input = $form_state->getValue('default_value_input');

    foreach ($field_names as $field_name) {
      $field_value = !empty($default_value_input[$field_name]) ? $default_value_input[$field_name] : NULL;
      $entity->set($field_name, $field_value);
    }

    $entity->save();

    drupal_set_message($this->t('Your settings have been saved.'));
  }

}
