<?php

namespace Drupal\gridstack\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\Xss;
use Drupal\blazy\BlazyFormatterManager;
use Drupal\blazy\Plugin\Field\FieldFormatter\BlazyFileFormatterBase;
use Drupal\gridstack\GridStackFormatterInterface;
use Drupal\gridstack\GridStackManagerInterface;
use Drupal\gridstack\GridStackDefault;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Base class for gridstack image and file ER formatters.
 */
abstract class GridStackFileFormatterBase extends BlazyFileFormatterBase {

  /**
   * Constructs a GridStackImageFormatter instance.
   */
  public function __construct($plugin_id, $plugin_definition, FieldDefinitionInterface $field_definition, array $settings, $label, $view_mode, array $third_party_settings, BlazyFormatterManager $blazy_manager, GridStackFormatterInterface $formatter, GridStackManagerInterface $manager) {
    parent::__construct($plugin_id, $plugin_definition, $field_definition, $settings, $label, $view_mode, $third_party_settings, $blazy_manager);
    $this->formatter = $formatter;
    $this->manager   = $manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $plugin_id,
      $plugin_definition,
      $configuration['field_definition'],
      $configuration['settings'],
      $configuration['label'],
      $configuration['view_mode'],
      $configuration['third_party_settings'],
      $container->get('blazy.formatter.manager'),
      $container->get('gridstack.formatter'),
      $container->get('gridstack.manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return GridStackDefault::imageSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $files = $this->getEntitiesToView($items, $langcode);

    // Early opt-out if the field is empty.
    if (empty($files)) {
      return [];
    }

    // Collects specific settings to this formatter.
    $build = ['settings' => $this->buildSettings()];

    $this->formatter->buildSettings($build, $items);

    // Build the elements.
    $this->buildElements($build, $files);

    // Supports Blazy multi-breakpoint images if provided.
    $this->formatter->isBlazy($build['settings'], $build['items'][0]);

    return $this->manager()->build($build);
  }

  /**
   * Builds the settings.
   */
  public function buildSettings() {
    $settings              = $this->getSettings();
    $settings['blazy']     = TRUE;
    $settings['lazy']      = 'blazy';
    $settings['namespace'] = $settings['item_id'] = 'gridstack';
    $settings['plugin_id'] = $this->getPluginId();

    return $settings;
  }

  /**
   * Build the gridstack carousel elements.
   */
  public function buildElements(array &$build, $files) {
    $settings = &$build['settings'];
    $item_id  = $settings['item_id'];
    $media    = method_exists($this, 'getMediaItem');

    foreach ($files as $delta => $file) {
      $settings['delta'] = $delta;
      $settings['type']  = 'image';

      /** @var Drupal\image\Plugin\Field\FieldType\ImageItem $item */
      $item = $file->_referringItem;

      $settings['file_tags'] = $file->getCacheTags();
      $settings['uri']       = $file->getFileUri();

      // Overrides fallback breakpoint image_style with grid image_style.
      // This tells theme_blazy() to respect different image style per item.
      if (!empty($settings['breakpoints'])) {
        foreach ($settings['breakpoints'] as $key => &$breakpoint) {
          if (isset($breakpoint['image_style']) && !empty($breakpoint['grids'][$delta]) && !empty($breakpoint['grids'][$delta]['image_style'])) {
            $breakpoint['image_style'] = $breakpoint['grids'][$delta]['image_style'];
          }

          // Overrides image style to use a defined image style per grid item.
          // This allows each individual box to have different image style.
          if ($key == 'lg' && !empty($breakpoint['grids'][$delta]['image_style'])) {
            $settings['_dimensions'] = empty($settings['background']);
            $settings['image_style'] = $breakpoint['grids'][$delta]['image_style'];
          }
        }
      }

      $element = ['item' => $item, 'settings' => $settings];

      // If imported Drupal\blazy\Dejavu\BlazyVideoTrait.
      if ($media) {
        if (!empty($this->getImageItem($item))) {
          $element['item'] = $this->getImageItem($item)['item'];
          $element['settings'] = array_merge($settings, $this->getImageItem($item)['settings']);
        }

        $this->getMediaItem($element, $file);
      }

      // Image with responsive image, lazyLoad, and lightbox supports.
      $element[$item_id] = $this->formatter->getImage($element);

      if (!empty($settings['caption'])) {
        foreach ($settings['caption'] as $caption) {
          $element['caption'][$caption] = empty($element['item']->{$caption}) ? [] : ['#markup' => Xss::filterAdmin($element['item']->{$caption})];
        }
      }

      // Build individual gridstack item.
      $build['items'][$delta] = $element;

      unset($element);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $element = parent::settingsForm($form, $form_state);

    if (isset($element['image_style'])) {
      $element['image_style']['#description'] = $this->t('This will be treated as the fallback image style if the optionset image styles not provided.');
    }

    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public function getScopedFormElements() {
    $scopes = [
      'background'  => TRUE,
      'breakpoints' => FALSE,
      'no_ratio'    => TRUE,
      'id'          => FALSE,
    ];

    return $scopes + parent::getScopedFormElements();
  }

}
