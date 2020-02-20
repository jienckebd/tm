<?php

namespace Acquia\Blt\Custom\Commands;

use Acquia\Blt\Robo\BltTasks;
use Acquia\Blt\Robo\Exceptions\BltException;

/**
 * Defines commands in the "setup:db*" namespace.
 */
class DeployLocalCommand extends Base {

  /**
   * Deploy build artifact from local.
   *
   * @command deploy:local
   *
   */
  public function commandLogic() {
    $default_branch = $this->getConfigValue('git.default_branch');
    $cmd = "/var/www/tm/vendor/bin/blt deploy --commit-msg \"TM-000: Automated build.\" --branch \"{$default_branch}-build\" --no-interaction";
    $result = $this->executeCommand($cmd);
    return $result;
  }

}
