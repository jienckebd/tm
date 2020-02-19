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
