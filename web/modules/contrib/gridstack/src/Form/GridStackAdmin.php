<?php

namespace Drupal\gridstack\Form;

use Drupal\Core\Url;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Component\Utility\Html;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\blazy\Form\BlazyAdminInterface;
use Drupal\gridstack\GridStackManagerInterface;

/**
 * Provides resusable admin functions or form elements.
 */
class GridStackAdmin implements GridStackAdminInterface {

  use StringTranslationTrait;

  /**
   * The blazy admin service.
   *
   * @var \Drupal\blazy\Form\BlazyAdminInterface
   */
  protected $blazyAdmin;

  /**
   * The gridstack manager service.
   *
   * @var \Drupal\gridstack\GridStackManagerInterface
   */
  protected $manager;

  /**
   * Constructs a GridStackAdmin object.
   *
   * @param \Drupal\blazy\Form\BlazyAdminInterface $blazy_admin
   *   The blazy admin service.
   * @param \Drupal\gridstack\GridStackManagerInterface $manager
   *   The gridstack manager service.
   */
  public function __construct(BlazyAdminInterface $blazy_admin, GridStackManagerInterface $manager) {
    $this->blazyAdmin = $blazy_admin;
    $this->manager    = $manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('blazy.admin.extended'), $container->get('gridstack.manager'));
  }

  /**
   * Returns the blazy admin formatter.
   */
  public function blazyAdmin() {
    return $this->blazyAdmin;
  }

  /**
   * Returns the slick manager.
   */
  public function manager() {
    return $this->manager;
  }

  /**
   * Returns all settings form elements.
   */
  public function buildSettingsForm(array &$form, $definition = []) {
    $definition['namespace']  = 'gridstack';
    $definition['optionsets'] = $this->blazyAdmin->getOptionsetOptions('gridstack');
    $definition['skins']      = $this->getSkinOptions();
    $definition['style']      = FALSE;
    $definition['grid_form']  = FALSE;

    foreach (['background', 'caches', 'fieldable_form', 'id', 'vanilla'] as $key) {
      $definition[$key] = isset($definition[$key]) ? $definition[$key] : TRUE;
    }

    $definition['layouts'] = isset($definition['layouts']) ? array_merge($this->getLayoutOptions(), $definition['layouts']) : $this->getLayoutOptions();

    $this->openingForm($form, $definition);
    $this->mainForm($form, $definition);
    $this->closingForm($form, $definition);
  }

  /**
   * Returns the opening form elements.
   */
  public function openingForm(array &$form, $definition = []) {
    $path   = drupal_get_path('module', 'gridstack');
    $readme = Url::fromUri('base:' . $path . '/README.txt')->toString();

    if (!isset($form['optionset'])) {
      $this->blazyAdmin->openingForm($form, $definition);
    }

    if (isset($form['skin'])) {
      $form['skin']['#description'] = $this->t('Skins allow various layouts with just CSS. Some options below depend on a skin. Leave empty to DIY. Or use hook_gridstack_skins_info() and implement \Drupal\gridstack\GridStackSkinInterface to register ones.', [':url' => $readme]);
    }

    if (isset($form['background'])) {
      $form['background']['#description'] = $this->t('If trouble with image sizes not filling the given box, check this to turn the image into CSS background instead. To assign different image style per grid/box, edit the working optionset.');
    }
  }

  /**
   * Returns the main form elements.
   */
  public function mainForm(array &$form, $definition = []) {
    if (!empty($definition['image_style_form'])) {
      $this->blazyAdmin->imageStyleForm($form, $definition);
    }

    if (!empty($definition['media_switch_form'])) {
      $this->blazyAdmin->mediaSwitchForm($form, $definition);
    }

    if (!empty($definition['fieldable_form'])) {
      $this->blazyAdmin->fieldableForm($form, $definition);
    }

    if (!empty($definition['breakpoints'])) {
      $this->blazyAdmin->breakpointsForm($form, $definition);
    }
  }

  /**
   * Returns the closing ending form elements.
   */
  public function closingForm(array &$form, $definition = []) {
    if (!isset($form['cache'])) {
      $this->blazyAdmin->closingForm($form, $definition);
    }

    $form['#attached']['library'][] = 'gridstack/admin';
  }

  /**
   * Returns available skins for select options.
   */
  public function getSkinOptions() {
    $skins = &drupal_static(__METHOD__, NULL);
    if (!isset($skins)) {
      $skins = [];
      foreach ($this->manager->getSkins() as $skin => $properties) {
        $skins[$skin] = Html::escape($properties['name']);
      }
    }

    return $skins;
  }

  /**
   * Returns default layout options for the core Image, or Views.
   */
  public function getLayoutOptions() {
    return [
      'bottom' => $this->t('Caption bottom'),
      'center' => $this->t('Caption center'),
      'top'    => $this->t('Caption top'),
    ];
  }

  /**
   * Return the field formatter settings summary.
   */
  public function settingsSummary($plugin, $definition = []) {
    return $this->blazyAdmin->settingsSummary($plugin, $definition);
  }

  /**
   * Returns available fields for select options.
   */
  public function getFieldOptions($target_bundles = [], $allowed_field_types = [], $entity_type_id = 'media', $target_type = '') {
    return $this->blazyAdmin->getFieldOptions($target_bundles, $allowed_field_types, $entity_type_id, $target_type);
  }

  /**
   * Returns re-usable logic, styling and assets across fields and Views.
   */
  public function finalizeForm(array &$form, $definition = []) {
    return $this->blazyAdmin->finalizeForm($form, $definition);
  }

}
