<?php

namespace Acquia\Blt\Custom\Commands;

use Robo\Exception\TaskException;
use Symfony\Component\Console\Input\InputOption;

/**
 * Sync files and database from cloud to local.
 */
class ExtDevPushUpdateCommand extends Base {

  /**
   * Iterate through all development extensions, stage, commit, and push them.
   *
   * @command ext:dev:push-update
   *
   * @param array $options
   *   Any options for the command.
   *
   */
  public function commandLogic($options = [
    'ext-list' => InputOption::VALUE_OPTIONAL,
  ]) {

    $ext_dev = $this->getConfigValue('ext_dev');
    if (empty($ext_dev)) {
      $this->yell("There are no modules under development in your project. Please update the project.yml file.");
      return;
    }

    if (!empty($options['ext-list'])) {
      $ext_list = explode(',', $options['ext-list']);
    }

    foreach ($ext_dev as $ext_name => $ext_data) {

      if (!empty($ext_list)) {
        if (!in_array($ext_name, $ext_list)) {
          continue;
        }
      }

      try {
        $type = $ext_data['type'];
        $path = $ext_data['path'];
        $branch = $ext_data['branch'];
        $composer_id = $ext_data['composer_id'];
        $this->say("Attempting to push {$type} {$ext_name} in {$path} on branch {$branch}.");
        $this->gitStagePushRepo($path, $branch);
        $this->say("Push successful. Attempting to update {$type} {$ext_name} in {$path} on branch {$branch}.");
        $this->composerUpdate($composer_id);
        $this->say("Successfully pushed and updated {$type} {$ext_name} in {$path} on branch {$branch}.");
      }
      catch (TaskException $exception) {
        $this->yell("There was an error pushing and updating {$type} {$ext_name} in {$path} on branch {$branch}.");
      }
    }
  }

}
