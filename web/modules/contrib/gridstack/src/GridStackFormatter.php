<?php

namespace Drupal\gridstack;

use Drupal\gridstack\Entity\GridStack;
use Drupal\blazy\BlazyFormatterManager;

/**
 * Implements GridStackFormatterInterface.
 */
class GridStackFormatter extends BlazyFormatterManager implements GridStackFormatterInterface {

  /**
   * {@inheritdoc}
   */
  public function buildSettings(array &$build, $items) {
    $settings = &$build['settings'];

    // Prepare integration with Blazy.
    $settings['item_id']   = 'box';
    $settings['namespace'] = 'gridstack';

    // Pass basic info to parent::buildSettings().
    parent::buildSettings($build, $items);

    // GridStack specific stuffs.
    $build['optionset'] = GridStack::load($settings['optionset']);

    // Ensures deleted optionset while being used doesn't screw up.
    if (empty($build['optionset'])) {
      $build['optionset'] = GridStack::load('default');
    }

    // Converts gridstack breakpoint grids from stored JSON into array.
    unset($settings['breakpoints']);
    $build['optionset']->gridsJsonToArray($settings);
  }

}
