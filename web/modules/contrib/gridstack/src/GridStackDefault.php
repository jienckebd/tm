<?php

namespace Drupal\gridstack;

use Drupal\blazy\Dejavu\BlazyDefault;

/**
 * Defines shared plugin default settings for field formatter and Views style.
 *
 * @see FormatterBase::defaultSettings()
 * @see StylePluginBase::defineOptions()
 */
class GridStackDefault extends BlazyDefault {

  /**
   * Returns image-related field formatter and Views settings.
   */
  public static function imageSettings() {
    $settings = parent::imageSettings();

    foreach (['breakpoints', 'responsive_image_style', 'sizes'] as $key) {
      unset($settings[$key]);
    }

    return [
      'background' => TRUE,
    ] + $settings;
  }

}
