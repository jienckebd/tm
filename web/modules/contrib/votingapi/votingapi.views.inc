<?php

/**
 * @file
 * Contains views API hooks for Flag module.
 */

/**
 * Implements hook_views_data_alter().
 */
function votingapi_views_data_alter(array &$data) {
  $entity_type_manager = \Drupal::entityTypeManager();

  foreach ($entity_type_manager->getDefinitions() as $entity_type) {

    $entity_type_id = $entity_type->id();
    if (!$entity_type->hasHandlerClass('views_data')) {
      continue;
    }

    $base_table = $entity_type_manager->getHandler($entity_type_id, 'views_data')->getViewsTableForEntityType($entity_type);
    $data[$base_table]['vote_result'] = [
      'title' => t('@entity_label vote result', ['@entity_label' => $entity_type->getLabel()]),
      'help' => t('Relate this entity to its vote results.'),
      'relationship' => [
        'group' => t('Vote Result'),
        'label' => t('Vote Result'),
        'base' => 'votingapi_result',
        'base field' => 'entity_id',
        'relationship field' => $entity_type->getKey('id'),
        'id' => 'vote_result',
      ],
    ];
  }

}
