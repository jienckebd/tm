<?php

if (!isset($drush_major_version)) {
  $drush_version_components = explode('.', DRUSH_VERSION);
  $drush_major_version = $drush_version_components[0];
}
// Site talkingmachine, environment dev.
$aliases['local'] = array(
  'uri' => 'tm.local',
  'root' => '/var/www/tm/docroot',
  'path-aliases' => array(
    '%files' => 'sites/default/files',
  ),
);
$aliases['dev'] = array(
  'root' => '/var/www/html/talkingmachine.dev/docroot',
  'ac-site' => 'talkingmachine',
  'ac-env' => 'dev',
  'ac-realm' => 'devcloud',
  'uri' => 'talkingmachine7vftdjsemj.devcloud.acquia-sites.com',
  'remote-host' => 'talkingmachine7vftdjsemj.ssh.devcloud.acquia-sites.com',
  'remote-user' => 'talkingmachine.dev',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
    '%files' => 'sites/default/files',
  ),
);
$aliases['dev.livedev'] = array(
  'parent' => '@talkingmachine.dev',
  'root' => '/mnt/gfs/talkingmachine.dev/livedev/docroot',
);

if (!isset($drush_major_version)) {
  $drush_version_components = explode('.', DRUSH_VERSION);
  $drush_major_version = $drush_version_components[0];
}
// Site talkingmachine, environment test.
$aliases['test'] = array(
  'root' => '/var/www/html/talkingmachine.test/docroot',
  'ac-site' => 'talkingmachine',
  'ac-env' => 'test',
  'ac-realm' => 'devcloud',
  'uri' => 'talkingmachineg3fqbb7jaw.devcloud.acquia-sites.com',
  'remote-host' => 'talkingmachineg3fqbb7jaw.ssh.devcloud.acquia-sites.com',
  'remote-user' => 'talkingmachine.test',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  ),
);
$aliases['test.livedev'] = array(
  'parent' => '@talkingmachine.test',
  'root' => '/mnt/gfs/talkingmachine.test/livedev/docroot',
);
