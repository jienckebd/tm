<?php

namespace Drupal\cn_core\Service;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Session\SessionManagerInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ModuleInstallerInterface;
use Drupal\Core\KeyValueStore\KeyValueFactoryInterface;
use Drupal\Core\State\StateInterface;
use Drupal\Core\Database\Connection;
use Psr\Log\LoggerInterface;

/**
 * Class Sys
 * @package Drupal\cn_core\Service
 */
class SysInternal {

  /**
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   * */
  public $entityTypeManager;

  /**
   * @var \Drupal\cn_core\Service\EntityBulkUpdate
   */
  public $entityBulkUpdate;

  /**
   * @var \Drupal\Core\Database\Connection
   */
  public $database;

  /**
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  public $configFactory;

  /**
   * @var \Drupal\Core\State\StateInterface
   */
  public $state;

  /**
   * @var \Drupal\Core\KeyValueStore\KeyValueFactoryInterface
   */
  public $keyValue;

  /**
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  public $moduleHandler;

  /**
   * @var \Drupal\Core\Extension\ModuleInstallerInterface
   */
  public $moduleInstaller;

  /**
   * The current user injected into the service.
   *
   * @var AccountInterface
   */
  public $currentUser;

  /**
   * The session manager.
   *
   * @var \Drupal\Core\Session\SessionManagerInterface
   */
  public $sessionManager;

  /**
   * The logger.
   *
   * @var \Psr\Log\LoggerInterface
   */
  public $logger;

  /**
   * SysInternal constructor.
   * @param EntityTypeManagerInterface $entity_type_manager
   * @param EntityBulkUpdate $entity_bulk_update
   * @param Connection $database
   * @param ConfigFactoryInterface $config_factory
   * @param StateInterface $state
   * @param KeyValueFactoryInterface $key_value
   * @param ModuleHandlerInterface $module_handler
   * @param ModuleInstallerInterface $module_installer
   * @param AccountInterface $current_user
   * @param SessionManagerInterface $session_manager
   * @param \Psr\Log\LoggerInterface $logger
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, EntityBulkUpdate $entity_bulk_update, Connection $database, ConfigFactoryInterface $config_factory, StateInterface $state, KeyValueFactoryInterface $key_value, ModuleHandlerInterface $module_handler, ModuleInstallerInterface $module_installer, AccountInterface $current_user, SessionManagerInterface $session_manager, LoggerInterface $logger) {
    $this->entityTypeManager = $entity_type_manager;
    $this->entityBulkUpdate = $entity_bulk_update;
    $this->database = $database;
    $this->configFactory = $config_factory;
    $this->state = $state;
    $this->keyValue = $key_value;
    $this->moduleHandler = $module_handler;
    $this->moduleInstaller = $module_installer;
    $this->currentUser = $current_user;
    $this->sessionManager = $session_manager;
    $this->logger = $logger;
  }

  /**
   * @param array $config_ids
   */
  public function deleteConfig(array &$config_ids) {
    foreach ($config_ids as $config_id) {
      $config = $this->configFactory
        ->getEditable($config_id);
      if (!empty($config)) {
        $config->delete();
      }
    }
  }

  /**
   * @param array $module_ids
   */
  public function installModule(array &$module_ids) {
    $this->moduleInstaller->install($module_ids);
  }

  /**
   * @param array $module_ids
   */
  public function uninstallModule(array &$module_ids) {
    $this->moduleInstaller->uninstall($module_ids);
  }

  /**
   * @param $module_name
   * @param $new_path
   * @return bool
   */
  public function moveModule($module_name, $new_path) {
    $state_module_path_id = 'system.module.files';
    $module_paths = $this->state->get($state_module_path_id);
    print_r($module_paths);
    exit;
    if (empty($module_paths[$module_name])) {
      $this->logger->notice($this->t('Module @module_name is not installed.', [
        '@module_name' => $module_name,
      ]));
      return FALSE;
    }

    $new_path = "{$new_path}/{$module_name}.info.yml";
    $module_paths[$module_name] = $new_path;
    $this->state->set($state_module_path_id, $module_paths);
    return TRUE;
  }

  /**
   * Cleans deleted field data out of system.
   */
  public function cleanDeletedFields() {
    $this->state->set('field.field.deleted', NULL);
    $this->state->set('field.storage.deleted', NULL);
    $this->dropTableByStringMatch(['field_deleted%']);
  }

  /**
   * Drops a set of tables based on a set of string comparisons.
   *
   * @param array $string_comparisons
   */
  public function dropTableByStringMatch(array $string_comparisons) {
    $this->tableOpExec('drop', $string_comparisons);
  }

  /**
   * Drops a set of tables based on a set of string comparisons.
   *
   * @param array $string_comparisons
   */
  public function truncateTableByStringMatch(array $string_comparisons) {
    $this->tableOpExec('truncate', $string_comparisons);
  }

  /**
   * @param $operation
   * @param array $string_comparisons
   */
  public function tableOpExec($operation, array $string_comparisons) {

    $operation_processed = strtoupper($operation);

    foreach ($string_comparisons as $string_comparison) {
      $tables = $this->database->query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.tables WHERE TABLE_NAME LIKE '{$string_comparison}'")->fetchAll();

      // Bring tables in to PHP array from SQL to allow operations per table.
      if (!empty($tables)) {
        foreach ($tables as $table_result) {
          $this->database->query($operation_processed . " TABLE {$table_result->TABLE_NAME}");
        }
      }
    }
  }

}
