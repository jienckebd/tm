<?php

namespace Drupal\cn_core\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;

/**
 * Plugin implementation of the 'text_default' formatter.
 *
 * @FieldFormatter(
 *   id = "omny_player",
 *   label = @Translation("Omny Player"),
 *   field_types = {
 *     "link",
 *   }
 * )
 */
class OmnyPlayer extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];

    foreach ($items as $delta => $item) {
      $uri = $item->uri;
      $embed_url = "{$uri}/embed";

      $elements[$delta] = [
        '#type' => 'html_tag',
        '#tag' => 'iframe',
        '#value' => '',
        '#attributes' => [
          'src' => $embed_url,
          'width' => '100%',
        ],
      ];
    }

    return $elements;
  }

}
