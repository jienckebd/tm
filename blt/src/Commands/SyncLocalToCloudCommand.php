<?php

namespace Acquia\Blt\Custom\Commands;

use Acquia\Blt\Robo\BltTasks;
use Acquia\Blt\Robo\Exceptions\BltException;

/**
 * Sync files and database from cloud to local.
 */
class SyncLocalToCloudCommand extends Base {

  /**
   * Iteratively copies remote db to local db for each multisite.
   *
   * @command sync:local:cloud
   *
   */
  public function commandLogic() {

    $local_alias = '@' . $this->getConfigValue('drush.aliases.local');
    $remote_alias = '@' . $this->getConfigValue('drush.aliases.remote');

    $task = $this->taskDrush()
      ->alias('')
      ->assume('')
      ->uri('')
      ->drush('rsync')
      ->arg($local_alias . ':%files')
      ->arg($remote_alias . ':%files')
      ->option('exclude-paths', implode(':', $this->getConfigValue('sync.exclude-paths')))
      ->option('exclude', implode(':', $this->getConfigValue('sync.exclude-file-types')));
    $result = $task->run();

    $task = $this->taskDrush()
      ->alias($this->getConfigValue('drush.aliases.remote'))
      ->drush('sql-drop')
      ->assume(TRUE);
    $result = $task->run();

    $task = $this->taskDrush()
      ->alias('')
      ->drush('cache-clear drush')
      ->drush('sql-sync')
      ->arg($local_alias)
      ->arg($remote_alias)
      ->option('create-db')
      ->assume(TRUE);
    $result = $task->run();

    return $result;
  }

}
