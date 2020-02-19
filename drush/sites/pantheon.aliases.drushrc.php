<?php
  /**
   * Pantheon drush alias file, to be placed in your ~/.drush directory or the aliases
   * directory of your local Drush home. Once it's in place, clear drush cache:
   *
   * drush cc drush
   *
   * To see all your available aliases:
   *
   * drush sa
   *
   * See http://helpdesk.getpantheon.com/customer/portal/articles/411388 for details.
   */

  $aliases['talkingmachines.local'] = array(
    'uri' => 'tm.local',
    'root' => '/var/www/tm/docroot',
    'path-aliases' => array(
      '%files' => 'sites/default/files',
    ),
  );
  $aliases['talkingmachines.dev'] = array(
    'uri' => 'dev-talkingmachines.pantheonsite.io',
    'db-url' => 'mysql://pantheon:c77bb5af31a84cb3aeb7ba5d526ca1f7@dbserver.dev.80150cd3-ce1c-47a2-8d72-76afad9db5a5.drush.in:11682/pantheon',
    'db-allows-remote' => TRUE,
    'remote-host' => 'appserver.dev.80150cd3-ce1c-47a2-8d72-76afad9db5a5.drush.in',
    'remote-user' => 'dev.80150cd3-ce1c-47a2-8d72-76afad9db5a5',
    'ssh-options' => '-p 2222 -o "AddressFamily inet"',
    'path-aliases' => array(
      '%files' => 'code/docroot/sites/default/files',
      '%drush-script' => 'drush',
     ),
  );
  $aliases['talkingmachines.live'] = array(
    'uri' => 'live-talkingmachines.pantheonsite.io',
    'db-url' => 'mysql://pantheon:49e31c8a8c4143fdab45904bde757a23@dbserver.live.80150cd3-ce1c-47a2-8d72-76afad9db5a5.drush.in:14510/pantheon',
    'db-allows-remote' => TRUE,
    'remote-host' => 'appserver.live.80150cd3-ce1c-47a2-8d72-76afad9db5a5.drush.in',
    'remote-user' => 'live.80150cd3-ce1c-47a2-8d72-76afad9db5a5',
    'ssh-options' => '-p 2222 -o "AddressFamily inet"',
    'path-aliases' => array(
      '%files' => 'code/sites/default/files',
      '%drush-script' => 'drush',
     ),
  );
  $aliases['talkingmachines.test'] = array(
    'uri' => 'test-talkingmachines.pantheonsite.io',
    'db-url' => 'mysql://pantheon:ebcde88b8d594fbc9d2ff9bc1ec9f731@dbserver.test.80150cd3-ce1c-47a2-8d72-76afad9db5a5.drush.in:12372/pantheon',
    'db-allows-remote' => TRUE,
    'remote-host' => 'appserver.test.80150cd3-ce1c-47a2-8d72-76afad9db5a5.drush.in',
    'remote-user' => 'test.80150cd3-ce1c-47a2-8d72-76afad9db5a5',
    'ssh-options' => '-p 2222 -o "AddressFamily inet"',
    'path-aliases' => array(
      '%files' => 'code/sites/default/files',
      '%drush-script' => 'drush',
     ),
  );
