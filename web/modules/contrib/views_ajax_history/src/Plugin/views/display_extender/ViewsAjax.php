<?php

namespace Drupal\views_ajax_history\Plugin\views\display_extender;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\display_extender\DisplayExtenderPluginBase;

/**
 * Defines a display extender for views_ajax_history.
 *
 * @ViewsDisplayExtender(
 *   id = "views_ajax_history",
 *   title = @Translation("Views ajax history")
 * )
 */
class ViewsAjax extends DisplayExtenderPluginBase {

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();

    $options['history'] = ['default' => TRUE];

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    if ($form_state->get('section') === 'use_ajax') {
      $form['history'] = [
        '#type' => 'checkbox',
        '#title' => $this->t('Use ajax history'),
        '#default_value' => $this->options['history'],
      ];
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitOptionsForm(&$form, FormStateInterface $form_state) {
    parent::submitOptionsForm($form, $form_state);
    switch ($form_state->get('section')) {
      case 'use_ajax':
        $this->options['history'] = $form_state->getValue('history');
        break;
    }
  }

  /**
   * {@inheritdoc}
   */
  public function defaultableSections(&$sections, $section = NULL) {
    $sections['history'] = ['history'];
  }

}
