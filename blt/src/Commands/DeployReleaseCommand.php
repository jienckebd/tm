<?php

namespace Acquia\Blt\Custom\Commands;

use Acquia\Blt\Robo\BltTasks;
use Acquia\Blt\Robo\Exceptions\BltException;
use Robo\Exception\TaskException;
use Robo\Contract\VerbosityThresholdInterface;

/**
 * Defines commands in the "setup:db*" namespace.
 */
class DeployReleaseCommand extends Base {

  /**
   * Deploy build artifact from local.
   *
   * @command deploy:release
   *
   */
  public function commandLogic() {

    try {
      $cmd = "";
      $result = $this->taskExecStack()
        ->exec($command)
        ->dir($this->getConfigValue('repo.root'))
        ->detectInteractive()
        ->setVerbosityThreshold(VerbosityThresholdInterface::VERBOSITY_VERBOSE)
        ->run();

      $result = $this->taskDrush()
        ->drush("blt-doctor")
        ->alias($alias)
        ->uri("")
        ->includePath($this->getConfigValue('blt.root') . '/drush')
        ->printOutput(FALSE)
        ->setVerbosityThreshold(VerbosityThresholdInterface::VERBOSITY_VERBOSE)
        ->run();
    }
    catch (TaskException $e) {

    }

  }

}
