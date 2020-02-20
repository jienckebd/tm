<?php

namespace Drupal\votingapi;

use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Plugin\DefaultPluginManager;

/**
 * Manages vote result plugins.
 *
 * @see hook_vote_result_info_alter()
 * @see \Drupal\image\Annotation\ImageEffect
 * @see \Drupal\image\ConfigurableImageEffectInterface
 * @see \Drupal\image\ConfigurableImageEffectBase
 * @see \Drupal\image\ImageEffectInterface
 * @see \Drupal\image\ImageEffectBase
 * @see plugin_api
 */
class VoteResultFunctionManager extends DefaultPluginManager {

  /**
   * Constructs a new ImageEffectManager.
   *
   * @param \Traversable $namespaces
   *   An object that implements \Traversable which contains the root paths
   *   keyed by the corresponding namespace to look for plugin implementations.
   * @param \Drupal\Core\Cache\CacheBackendInterface $cache_backend
   *   Cache backend instance to use.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler.
   */
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler) {
    parent::__construct('Plugin/VoteResultFunction', $namespaces, $module_handler, 'Drupal\votingapi\VoteResultFunctionInterface', 'Drupal\votingapi\Annotation\VoteResultFunction');
    $this->alterInfo('vote_result_info');
    $this->setCacheBackend($cache_backend, 'vote_result_plugins');
  }

  /**
   * Get the voting results for an entity.
   *
   * @param string $entity_type_id
   *   The type of entity, e.g. 'node'.
   * @param int $entity_id
   *   The ID of the entity.
   * @param string $context_entity_type
   *   The type of context entity.
   * @param int $context_entity_id
   *   The ID of the entity context.
   *
   * @return array
   *   An nested array
   */
  public function getResults($entity_type_id, $entity_id, $context_entity_type = NULL, $context_entity_id = NULL) {
    $results = [];

    if ($context_entity_type && $context_entity_id) {
      $result = db_select('votingapi_result', 'v')
        ->fields('v', ['type', 'function', 'value'])
        ->condition('entity_type', $entity_type_id)
        ->condition('entity_id', $entity_id)
        ->condition('context_entity_type', $context_entity_type)
        ->condition('context_entity_id', $context_entity_id)
        ->execute();
    }
    else {
      $result = db_select('votingapi_result', 'v')
        ->fields('v', ['type', 'function', 'value'])
        ->condition('entity_type', $entity_type_id)
        ->condition('entity_id', $entity_id)
        ->execute();
    }

    while ($row = $result->fetchAssoc()) {
      $results[$row['type']][$row['function']] = $row['value'];
    }

    return $results;
  }

  /**
   * Recalculates the aggregate voting results of all votes for a given entity.
   *
   * Loads all votes for a given piece of content, then calculates and caches
   * the aggregate vote results. This is only intended for modules that have
   * assumed responsibility for the full voting cycle: the votingapi_set_vote()
   * function recalculates automatically.
   *
   *
   * @param string $entity_type_id
   *   A string identifying the type of content being rated. Node, comment,
   *   aggregator item, etc.
   * @param string $entity_id
   *   The key ID of the content being rated.
   * @param string $vote_type
   *   The vote type.
   * @param string $context_entity_type
   *   The type of context entity.
   * @param int $context_entity_id
   *   The ID of the entity context.
   */
  public function recalculateResults($entity_type_id, $entity_id, $vote_type, $context_entity_type = NULL, $context_entity_id = NULL) {

    if ($context_entity_type && $context_entity_id) {
      db_delete('votingapi_result')
        ->condition('entity_type', $entity_type_id)
        ->condition('entity_id', $entity_id)
        ->condition('context_entity_type', $context_entity_type)
        ->condition('context_entity_id', $context_entity_id)
        ->condition('type', $vote_type)
        ->execute();

      $vote_ids = \Drupal::entityQuery('vote')
        ->condition('entity_type', $entity_type_id)
        ->condition('entity_id', $entity_id)
        ->condition('context_entity_type', $context_entity_type)
        ->condition('context_entity_id', $context_entity_id)
        ->condition('type', $vote_type)
        ->sort('type')
        ->execute();
    }
    else {
      db_delete('votingapi_result')
        ->condition('entity_type', $entity_type_id)
        ->condition('entity_id', $entity_id)
        ->condition('type', $vote_type)
        ->execute();

      $vote_ids = \Drupal::entityQuery('vote')
        ->condition('entity_type', $entity_type_id)
        ->condition('entity_id', $entity_id)
        ->condition('type', $vote_type)
        ->sort('type')
        ->execute();
    }

    $vote_storage = \Drupal::entityManager()->getStorage('vote');
    $votes = [];
    $vote_type = '';
    if (!empty($vote_ids)) {
      foreach ($vote_ids as $vote_id) {
        $vote = $vote_storage->load($vote_id);

        // Votes are sorted by vote type, so when we hit a new type, we can run
        // find the results of the current set and then start over.
        if (!empty($vote_type) && $vote_type != $vote->bundle()) {
          $this->performAndStore($votes, $context_entity_type, $context_entity_id);
          $vote_type = $vote->bundle();
          $votes = [];
        }
        $votes[] = $vote;
      }

      // Still one last set to process
      $this->performAndStore($votes, $context_entity_type, $context_entity_id);
    }
  }

  /**
   * Perform the result calculations available on a set of votes and store the
   * results.
   *
   * @param VoteInterface[] $votes
   *   The set of votes to perform the calculations on. All votes in the set are
   *   expected to be the same vote type and for the same entity.
   * @param string $context_entity_type
   *   The type of context entity.
   * @param int $context_entity_id
   *   The ID of the entity context.
   */
  protected function performAndStore($votes, $context_entity_type = NULL, $context_entity_id = NULL) {
    $entity_type_id = $votes[0]->getVotedEntityType();
    $entity_id = $votes[0]->getVotedEntityId();
    $vote_type = $votes[0]->bundle();

    foreach ($this->getDefinitions() as $plugin_id => $definition) {
      $plugin = $this->createInstance($plugin_id);

      if ($context_entity_type && $context_entity_id) {
        db_insert('votingapi_result')->fields([
          'entity_id' => $entity_id,
          'entity_type' => $entity_type_id,
          'context_entity_type' => $context_entity_type,
          'context_entity_id' => $context_entity_id,
          'type' => $vote_type,
          'function' => $plugin_id,
          'value' => $plugin->calculateResult($votes),
          'timestamp' => \Drupal::time()->getRequestTime(),
        ])->execute();
      }
      else {
        db_insert('votingapi_result')->fields([
          'entity_id' => $entity_id,
          'entity_type' => $entity_type_id,
          'type' => $vote_type,
          'function' => $plugin_id,
          'value' => $plugin->calculateResult($votes),
          'timestamp' => \Drupal::time()->getRequestTime(),
        ])->execute();
      }
    }
  }
}
