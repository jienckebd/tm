<?php

namespace Drupal\cn_core\Plugin\views\filter;

use Drupal\Core\Entity\Element\EntityAutocomplete;
use Drupal\Core\Form\FormStateInterface;
use Drupal\taxonomy\Entity\Term;
use Drupal\taxonomy\TermStorageInterface;
use Drupal\taxonomy\VocabularyStorageInterface;
use Drupal\views\ViewExecutable;
use Drupal\views\Plugin\views\display\DisplayPluginBase;
use Drupal\views\Plugin\views\filter\ManyToOne;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Filter by term id.
 *
 * @ingroup views_filter_handlers
 *
 * @ViewsFilter("entity_reference_options")
 */
class EntityReferenceOptions extends ManyToOne {

  /**
   * {@inheritdoc}
   */
  public function getValueOptions() {

    $entity_type_manager = \Drupal::entityTypeManager();
    $definition = $this->definition;
    $entity_type = $definition['entity_type'];
    $field_name = $definition['field_name'];
    $field_storage_config_id = "{$entity_type}.{$field_name}";
    $field = $entity_type_manager->getStorage('field_storage_config')->load($field_storage_config_id);
    $target_entity_type = $field->getSetting('target_type');
    $bundles = $entity_type_manager->getStorage($target_entity_type)->loadMultiple();
    $options = [];
    foreach ($bundles as $key => $feed) {
      $options[$feed->id()] = $feed->label();
    }
    $this->valueOptions = $options;

    return $this->valueOptions;
  }

}
