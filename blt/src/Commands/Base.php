<?php

namespace Acquia\Blt\Custom\Commands;

use Acquia\Blt\Robo\BltTasks;
use Acquia\Blt\Robo\Exceptions\BltException;
use Robo\Contract\VerbosityThresholdInterface;
use Symfony\Component\Yaml\Yaml;

/**
 * Defines commands in the "setup:db*" namespace.
 */
abstract class Base extends BltTasks {

  /**
   * @param $command
   * @return null|\Robo\Result
   * @throws \Robo\Exception\TaskException
   */
  protected function executeCommand($command) {
    $this->say("Executing command <comment>$command</comment>...");
    $result = $this->taskExecStack()
      ->exec($command)
      ->dir($this->getConfigValue('repo.root'))
      ->detectInteractive()
      ->setVerbosityThreshold(VerbosityThresholdInterface::VERBOSITY_VERBOSE)
      ->run();

    return $result;
  }

  /**
   * @param $project_path
   * @param $branch
   * @return bool|null|\Robo\Result|string
   * @throws \Robo\Exception\TaskException
   */
  public function gitStagePushRepo($project_path, $branch) {

    $cmd = 'git status | grep "nothing to commit"';
    $result = $this->taskExec($cmd)
      ->dir($project_path)
      ->printOutput(FALSE)
      ->run();
    $result = $result->getMessage();
    if (strpos($result, 'nothing to commit') !== FALSE) {
      $this->say("No changes found in {$project_path} to push.");
      return;
    }

    $result = $this->taskExecStack()
      ->dir($project_path)
      ->exec('git add -A')
      ->exec("git commit -m 'Automated build.'")
      ->exec("git push origin {$branch}")
      ->interactive(FALSE)
      ->printOutput(TRUE)
      ->printMetadata(FALSE)
      ->run();
    return;
  }

  /**
   * @param $project_name
   * @throws \Robo\Exception\TaskException
   */
  public function composerUpdate($project_name) {
    $cmd = "composer update {$project_name}";
    $result = $this->taskExecStack()
      ->dir($this->getConfigValue('repo.root'))
      ->exec($cmd)
      ->interactive(FALSE)
      ->printOutput(TRUE)
      ->printMetadata(FALSE)
      ->run();
  }

}
