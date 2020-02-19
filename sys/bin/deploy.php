<?php

// Initialize system.
$sys_root = dirname(dirname(dirname(__FILE__)));
require_once "${sys_root}/sys/init.php";

if (function_exists('drush_log')) {
  drush_log("Starting system deployment process.", 'notice');
  drush_print(print_r($_ENV, TRUE));
}

// Run deploy bash script.
$deploy_script_path = "${_ENV['SYS_PATH_BIN']}/deploy.sh";

if (!empty($_ENV['PANTHEON_SITE'])) {
  $alias = "@self";
}
else {
  $alias = "@talkingmachine.local";
}
$cmd = "${deploy_script_path} ${alias}";
$output = shell_exec($cmd);
print $output;

$entity_feed = entity_load('feeds_feed', 19);
$entity_feed->set('source', 'https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/b92baa3c-b9c8-488c-aa9e-aafd001cbf66/12abbc3c-ae53-487a-b83b-aafd001cbf79/podcast.rss');
$entity_feed->save();
