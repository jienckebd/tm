<?php

/**
 * @file
 * Contains \Drupal\entityform_block\Plugin\Block\EntityEditFormBlock.
 */

namespace Drupal\cn_display\Plugin\Block;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Provides a block for creating a new content entity.
 *
 * @Block(
 *   id = "entity_field_form_block",
 *   admin_label = @Translation("Entity field form"),
 *   category = @Translation("Forms")
 * )
 */
class EntityFieldEditFormBlock extends EntityEditFormBlock {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return array(
      'entity_type' => '',
      'bundle' => '',
      'field_name' => '',
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function blockAccess(AccountInterface $account) {
    return \Drupal::entityManager()
      ->getAccessControlHandler($this->configuration['entity_type'])
      ->createAccess($this->configuration['bundle'], $account, [], TRUE);
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $this->addAjaxToElement($form, $form['entity_type_bundle']);
    $form['entity_type_bundle']['#ajax']['callback'] = [$this, 'ajaxOpReturnSettings'];

    // Get the selected entity type and bundle based on the form state or the
    // default value set on the form element. Don't expose the field names until
    // entity type and bundle are selected so the fields can be pulled and
    // formatted in a nice options list.
    $settings = $form_state->getValue('settings');
    $entity_type_bundle = !empty($settings['entity_type_bundle']) ? $settings['entity_type_bundle'] : $form['entity_type_bundle']['#default_value'];

    $options_field_name = [];
    if (!empty($entity_type_bundle)) {
      list($entity_type_id, $bundle_id) = explode('.', $entity_type_bundle);
      if (!empty($entity_type_id) && !empty($bundle_id)) {
        foreach ($this->entityFieldManager->getFieldDefinitions($entity_type_id, $bundle_id) as $field_name => $field_definition) {
          $options_field_name[$field_name] = $this->t('@field_label (@field_name)', [
            '@field_label' => $field_definition->getLabel(),
            '@field_name' => $field_name,
          ]);
        }
      }
    }

    if (!empty($options_field_name)) {
      // Some entity types have dozens of fields, so sort alphabetically.
      asort($options_field_name, SORT_STRING);
      $form['field_name'] = [
        '#title' => $this->t('Fields'),
        '#type' => 'checkboxes',
        '#required' => TRUE,
        '#options' => $options_field_name,
        '#default_value' => !empty($this->configuration['field_name']) ? $this->configuration['field_name'] : [],
        '#description' => $this->t('Select any number of fields to include on the form.'),
      ];
    }

    return $form;
  }

  /**
   * Generic ajax callback to return the form.
   *
   * @param array $form
   *   The form structure.
   * @param FormStateInterface $form_state
   *   The form state.
   *
   * @return array
   *   The form structure.
   */
  public static function ajaxOpReturnSettings(array &$form, FormStateInterface $form_state) {
    return $form['settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);
    $field_names = $form_state->getValue('field_name');
    $selected_field_names = [];
    foreach ($field_names as $key => $field_name) {
      if ($key === $field_name) {
        $selected_field_names[] = $field_name;
      }
    }
    $this->configuration['field_name'] = $selected_field_names;
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $this->setEntity();
    return $this->formBuilder->getForm('\Drupal\cn_display\Form\EntityFieldForm', $this->entity, $this->configuration['field_name']);
  }

}
