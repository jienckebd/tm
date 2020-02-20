<?php

namespace Drupal\gridstack\Plugin\views\style;

use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\blazy\Blazy;
use Drupal\blazy\BlazyManagerInterface;
use Drupal\blazy\Dejavu\BlazyStylePluginBase;
use Drupal\gridstack\GridStackDefault;
use Drupal\gridstack\Entity\GridStack;
use Drupal\gridstack\GridStackManagerInterface;

/**
 * GridStack style plugin.
 *
 * @ingroup views_style_plugins
 *
 * @ViewsStyle(
 *   id = "gridstack",
 *   title = @Translation("GridStack"),
 *   help = @Translation("Display the results in a GridStack."),
 *   theme = "gridstack",
 *   register_theme = FALSE,
 *   display_types = {"normal"}
 * )
 */
class GridStackViews extends BlazyStylePluginBase {

  /**
   * The gridstack service manager.
   *
   * @var \Drupal\gridstack\GridStackManagerInterface
   */
  protected $manager;

  /**
   * Constructs a GridStackManager object.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, BlazyManagerInterface $blazy_manager, GridStackManagerInterface $manager) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $blazy_manager);
    $this->manager = $manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static($configuration, $plugin_id, $plugin_definition, $container->get('blazy.manager'), $container->get('gridstack.manager'));
  }

  /**
   * Returns the gridstack admin.
   */
  public function admin() {
    return \Drupal::service('gridstack.admin');
  }

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = ['stamp' => ['default' => []]];
    foreach (GridStackDefault::extendedSettings() as $key => $value) {
      $options[$key] = ['default' => $value];
    }
    return $options + parent::defineOptions();
  }

  /**
   * Overrides parent::buildOptionsForm().
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    $fields = ['captions', 'layouts', 'images', 'links', 'titles', 'classes'];
    $definition = $this->getDefinedFieldOptions($fields);

    $this->admin()->buildSettingsForm($form, $definition);

    $title = '<p class="form__header form__title">';
    $title .= $this->t('Check Vanilla if using content/custom markups, not fields. <small>See it under <strong>Format > Show</strong> section. Otherwise Gridstack markups apply which require some fields added below.</small>');
    $title .= '</p>';
    $form['opening']['#markup'] = '<div class="form--gridstack form--slick form--views form--half form--vanilla has-tooltip">' . $title;
    $form['image']['#description'] .= ' ' . $this->t('Be sure to UNCHECK "Use field template" (by default already UNCHECKED) to have it work for Blazy lazyloading. Use Blazy formatters for relevant features such as Colorbox/Photobox/Photoswipe, or multimedia supports.');
  }

  /**
   * Overrides StylePluginBase::render().
   */
  public function render() {
    $blazy     = $this->blazyManager();
    $view      = $this->view;
    $settings  = $this->options + GridStackDefault::entitySettings();
    $view_name = $view->storage->id();
    $view_mode = $view->current_display;
    $count     = count($view->result);
    $id        = Blazy::getHtmlId("gridstack-{$view_name}-{$view_mode}", $settings['id']);
    $optionset = GridStack::load($settings['optionset']);
    $grids     = array_filter($optionset->getGrids());

    $settings += [
      'cache_metadata' => [
        'keys' => [$id, $view_mode, $settings['optionset']],
      ],
      'count' => $count,
      'current_view_mode' => $view_mode,
      'view_name' => $view_name,
    ];

    // Grids: x y width height image_style
    // Breakpoints: xs sm md lg, may contain width column image_style grids.
    $settings['id']        = $id;
    $settings['item_id']   = 'box';
    $settings['caption']   = array_filter($settings['caption']);
    $settings['namespace'] = 'gridstack';
    $settings['ratio']     = '';
    $settings['_views']    = TRUE;

    // Converts gridstack breakpoint grids from stored JSON into array.
    $optionset->gridsJsonToArray($settings);

    $elements = [];
    foreach ($this->renderGrouping($view->result, $settings['grouping']) as $rows) {
      $settings = array_filter($settings);
      $items = $this->buildElements($settings, $rows, $grids);

      // Supports Blazy formatter multi-breakpoint images if available.
      $blazy->isBlazy($settings, $items[0]);
      $build = [
        'items'     => $items,
        'optionset' => $optionset,
        'settings'  => $settings,
      ];

      $elements = $this->manager->build($build);
      unset($build);
    }

    return $elements;
  }

  /**
   * Returns gridstack contents.
   */
  public function buildElements(array $settings, $rows, $grids = []) {
    $build   = [];
    $view    = $this->view;
    $item_id = $settings['item_id'];

    foreach ($rows as $delta => $row) {
      $view->row_index = $delta;

      $box           = [];
      $box['delta']  = $delta;
      $box[$item_id] = [];

      // Overrides fallback breakpoint image_style with grid image_style.
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

      $box['settings'] = $settings;

      if (!empty($settings['class'])) {
        $classes = $this->getFieldString($row, $settings['class'], $delta);
        $box['settings']['class'] = empty($classes[$delta]) ? [] : $classes[$delta];
      }

      // Use Vanilla gridstack if so configured, ignoring GridStack markups.
      if (!empty($settings['vanilla'])) {
        $box[$item_id] = $view->rowPlugin->render($row);
      }
      else {
        // Build individual row/element contents.
        $this->buildElement($box, $row, $delta);
      }

      // Build gridstack items.
      $build[] = $box;
      unset($box);
    }

    unset($view->row_index);
    return $build;
  }

}
