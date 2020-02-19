<?php

$sys_root = dirname(dirname(__FILE__));

$_ENV['SYS_PATH_ROOT'] = $sys_root;
$_ENV['SYS_PATH_BIN'] = "{$sys_root}/sys/bin";
$_ENV['SYS_PATH_ETC'] = "{$sys_root}/sys/etc";

if (empty($_ENV['AH_SITE_ENVIRONMENT'])) {
  $_ENV['AH_SITE_ENVIRONMENT'] = 'local';
  $_ENV['SYS_CONTEXT'] = 'local';
  $_ENV['AH_SITE_GROUP'] = 'talkingmachine';
}
else {
  $_ENV['SYS_CONTEXT'] = 'cloud';
}
