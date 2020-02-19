<?php

namespace Drupal\cn_display\Plugin\Field\FieldFormatter;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Field\Plugin\Field\FieldFormatter\StringFormatter as Base;

/**
 * Extends the core entity reference label formatter to support rel.
 */
class StringFormatter extends Base {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
        'rel' => 'revision',
      ] + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);

    $entity_type_id = $this->fieldDefinition->getTargetEntityTypeId();

    /** @var \Drupal\Core\Entity\ContentEntityTypeInterface $entity_type */
    $entity_type = \Drupal::entityTypeManager()->getDefinition($entity_type_id);

    // Build an option set of link templates/rel for the entity type.
    $link_templates = $entity_type->getLinkTemplates();
    $options_link_rel = [];
    foreach ($link_templates as $id => $pattern) {
      $options_link_rel[$id] = $id;
    }

    $elements['rel'] = [
      '#title' => t('Rel'),
      '#type' => 'select',
      '#options' => $options_link_rel,
      '#default_value' => $this->getSetting('rel'),
    ];

    return $elements;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = parent::settingsSummary();
    $summary[] = t('Rel: @rel', [
      '@rel' => $this->getSetting('rel'),
    ]);
    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  protected function getEntityUrl(EntityInterface $entity) {
    return $entity->toUrl($this->getSetting('rel'));
  }

}
