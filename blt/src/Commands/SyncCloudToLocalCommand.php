<?php

namespace Acquia\Blt\Custom\Commands;

use Acquia\Blt\Robo\BltTasks;
use Acquia\Blt\Robo\Exceptions\BltException;

/**
 * Sync files and database from cloud to local.
 */
class SyncCloudToLocalCommand extends Base {

  /**
   * Iteratively copies remote db to local db for each multisite.
   *
   * @command sync:cloud:local
   *
   */
  public function commandLogic() {

    $local_alias = '@' . $this->getConfigValue('drush.aliases.local');
    $remote_alias = '@' . $this->getConfigValue('drush.aliases.remote');

    $task = $this->taskDrush()
      ->alias($this->getConfigValue('drush.aliases.local'))
      ->drush('sql-drop')
      ->assume(TRUE);
    $result = $task->run();

    $task = $this->taskDrush()
      ->alias('')
      ->drush('cache-clear drush')
      ->drush('sql-sync')
      ->arg($remote_alias)
      ->arg($local_alias)
      ->option('structure-tables-key', 'lightweight')
      ->option('create-db')
      ->assume(TRUE);
    $result = $task->run();

    $task = $this->taskDrush()
      ->alias('')
      ->assume('')
      ->uri('')
      ->drush('rsync')
      ->arg($remote_alias . ':%files/')
      ->arg($local_alias . ':%files')
      ->option('exclude-paths', implode(':', $this->getConfigValue('sync.exclude-paths')))
      ->option('exclude', implode(':', $this->getConfigValue('sync.exclude-file-types')));
    $result = $task->run();

    return $result;
  }

}
