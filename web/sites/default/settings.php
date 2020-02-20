<?php

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';

if (getenv('HOST_UID')) {
  $databases = array(
    'default' =>
      array(
        'default' =>
          array(
            'database' => 'drupal',
            'username' => 'drupal',
            'password' => 'drupal',
            'host' => 'db',
            'port' => '3306',
            'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
            'driver' => 'mysql',
            'prefix' => '',
          ),
      ),
  );


  $config['system.logging']['error_level'] = 'verbose';

  /**
   * Disable CSS and JS aggregation.
   */
  $config['system.performance']['css']['preprocess'] = FALSE;
  $config['system.performance']['js']['preprocess'] = FALSE;
  $config['advagg.settings']['enabled'] = FALSE;

  /**
   * Disable the render cache.
   *
   * Note: you should test with the render cache enabled, to ensure the correct
   * cacheability metadata is present. However, in the early stages of
   * development, you may want to disable it.
   *
   * This setting disables the render cache by using the Null cache back-end
   * defined by the development.services.yml file above.
   *
   * Only use this setting once the site has been installed.
   */
  $settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
  $settings['cache']['bins']['render'] = 'cache.backend.null';
  $settings['cache']['bins']['page'] = 'cache.backend.null';
  $settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

}

/**
 * If there is a local settings file, then include it
 */
$local_settings = __DIR__ . "/settings/local.settings.php";
if (file_exists($local_settings)) {
  include $local_settings;
}

$settings['install_profile'] = 'cnc';

$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];

$config_directories['sync'] = DRUPAL_ROOT . "/../config/default";
$settings['config_sync_directory'] = $config_directories['sync'];
$settings['hash_salt'] = getenv('HASH_SALT') ?: 'wIpexdHvQeKnveWCYlPINYPyqsuuFwMtNyoATuylYJvMmkrpEcAMCIUakRLFbcSH';

$settings['update_free_access'] = FALSE;

# ini_set('memory_limit', '1024M');

// Enable memcache on cloud.
if (isset($settings['memcache']['servers'])) {
  // Use chainedfast as the default bin to use memcache with database fallback.
  $settings['cache']['default'] = 'cache.backend.chainedfast';

  // Set Redis to not get the cache_form (no performance difference).
  $settings['cache']['bins']['form'] = 'cache.backend.database';
}

/**
 * The default number of entities to update in a batch process.
 *
 * This is used by update and post-update functions that need to go through and
 * change all the entities on a site, so it is useful to increase this number
 * if your hosting configuration (i.e. RAM allocation, CPU speed) allows for a
 * larger number of entities to be processed in a single batch run.
 */
$settings['entity_update_batch_size'] = 50;

// On Acquia Cloud, this include file configures Drupal to use the correct
// database in each site environment (Dev, Stage, or Prod). To use this
// settings.php for development on your local workstation, set $db_url
// (Drupal 5 or 6) or $databases (Drupal 7 or 8) as described in comments above.
if (file_exists('/var/www/site-php')) {
  require('/var/www/site-php/talkingmachine/talkingmachine-settings.inc');
}

$settings['update_free_access'] = TRUE;

if (defined('PANTHEON_ENVIRONMENT')) {
  include __DIR__ . "/settings.pantheon.php";

  // Include the Redis services.yml file. Adjust the path if you installed to a contrib or other subdirectory.
  $settings['container_yamls'][] = 'modules/redis/example.services.yml';

  //phpredis is built into the Pantheon application container.
  $settings['redis.connection']['interface'] = 'PhpRedis';
  // These are dynamic variables handled by Pantheon.
  $settings['redis.connection']['host']      = $_ENV['CACHE_HOST'];
  $settings['redis.connection']['port']      = $_ENV['CACHE_PORT'];
  $settings['redis.connection']['password']  = $_ENV['CACHE_PASSWORD'];

  $settings['cache']['default'] = 'cache.backend.redis'; // Use Redis as the default cache.
  $settings['cache_prefix']['default'] = 'pantheon-redis';

  // Always set the fast backend for bootstrap, discover and config, otherwise this gets lost when redis is enabled.
  $settings['cache']['bins']['bootstrap'] = 'cache.backend.chainedfast';
  $settings['cache']['bins']['discovery'] = 'cache.backend.chainedfast';
  $settings['cache']['bins']['config']    = 'cache.backend.chainedfast';

  // Set Redis to not get the cache_form (no performance difference).
  $settings['cache']['bins']['form']      = 'cache.backend.database';
}

// Set environment based variables.
if (isset($_ENV['PANTHEON_ENVIRONMENT'])) {
  switch ($_ENV['PANTHEON_ENVIRONMENT']) {
    case 'local':
      $base_url = 'http://tm.local';
      $config['google_tag.settings']['environment_id'] = 'env-33';
      $config['google_tag.settings']['environment_token'] = 'UCZtZ6PkCd0GeSb_wEreKA';
      break;

    case 'dev':
      $base_url = 'http://dev-talkingmachines.pantheonsite.io';
      $config['google_tag.settings']['environment_id'] = 'env-34';
      $config['google_tag.settings']['environment_token'] = 'B-auxERyEhmTvvHdIyM7Fg';
      break;

    case 'test':
      $base_url = 'http://test-talkingmachines.pantheonsite.io';
      $config['google_tag.settings']['environment_id'] = 'env-35';
      $config['google_tag.settings']['environment_token'] = 'bjxYz-akp6RC0Ci7VRJKCA';
      break;

    case 'live':
      $base_url = 'http://thetalkingmachines.com';
      $config['google_tag.settings']['environment_id'] = 'env-2';
      $config['google_tag.settings']['environment_token'] = 'LC7dt9FiJkTdJqwFpg0WsQ';
      break;
  }
}
