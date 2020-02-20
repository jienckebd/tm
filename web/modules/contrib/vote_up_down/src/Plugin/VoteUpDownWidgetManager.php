<?php

namespace Drupal\vud\Plugin;

use Drupal\Core\Plugin\DefaultPluginManager;
use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Component\Utility\Html;

/**
 * Provides the Vote Up/Down widget plugin manager.
 */
class VoteUpDownWidgetManager extends DefaultPluginManager {

  /**
   * Constructs a new VoteUpDownWidgetManager object.
   *
   * @param \Traversable $namespaces
   *   An object that implements \Traversable which contains the root paths
   *   keyed by the corresponding namespace to look for plugin implementations.
   * @param \Drupal\Core\Cache\CacheBackendInterface $cache_backend
   *   Cache backend instance to use.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler to invoke the alter hook with.
   */
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler) {
    parent::__construct('Plugin/VoteUpDownWidget', $namespaces, $module_handler, 'Drupal\vud\Plugin\VoteUpDownWidgetInterface', 'Drupal\vud\Annotation\VoteUpDownWidget');

    $this->alterInfo('vud_widget');
    $this->setCacheBackend($cache_backend, 'vud_widget_plugins');
  }

  /**
   * @param $entity_type
   * @param $entity_id
   * @param null $context_entity_type
   * @param null $context_entity_id
   * @return string
   */
  public static function widgetWrapperId($entity_type, $entity_id, $context_entity_type = NULL, $context_entity_id = NULL) {
    if ($context_entity_type && $context_entity_id) {
      $id = "vud-widget-entity-{$entity_type}-{$entity_id}-{$context_entity_type}-{$context_entity_id}";
    }
    else {
      $id = "vud-widget-entity-{$entity_type}-{$entity_id}";
    }
    return $id;
  }

}
