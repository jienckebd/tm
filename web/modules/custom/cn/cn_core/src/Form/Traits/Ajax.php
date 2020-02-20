<?php

namespace Drupal\cn_core\Form\Traits;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\Html;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\RedirectCommand;
use Drupal\cn_core\Ajax\FormSubmitPassCommand;
use Drupal\cn_core\Ajax\FormSubmitFailCommand;
use Drupal\Core\Url;
use Zend\Stdlib\RequestInterface;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Ajax\InvokeCommand;

/**
 * Provides helper methods for using an AJAX modal.
 */
trait Ajax {

  /**
   * @var The ajax config.
   */
  public $ajaxConfig;

  /**
   * Gets attributes for use with an AJAX modal.
   *
   * @return array
   */
  public static function getAjaxAttributes() {
    return [
      'class' => ['use-ajax'],
      'data-dialog-type' => 'modal',
      'data-dialog-options' => Json::encode([
        'width' => 'auto',
      ]),
    ];
  }

  /**
   * Sets form ajax wrapper and settings.
   *
   * @param array $form
   * @param FormStateInterface $form_state
   */
  public function setFormAjax(array &$form, FormStateInterface $form_state) {

    // Get or set the unique ajax wrapper for this form.
    $storage = $form_state->getStorage();
    if (empty($storage['ajax_wrapper_id'])) {
      $form_id = $this->getFormId();
      $storage['ajax_wrapper_id'] = "ajax--wrapper--form--{$form_id}";
      $form_state->setStorage($storage);
    }

    // Wrap the form in the unique ajax wrapper and store it in the form state
    // storage so it can be reused across form rebuilds.
    $form['#prefix'] = "<div id=\"{$storage['ajax_wrapper_id']}\" class=\"ajax--wrapper ajax--wrapper--form\"><div class=\"ajax--wrapper--inner\">";
    $form['#suffix'] = '</div></div>';
    $form['#ajax_wrapper'] = $storage['ajax_wrapper_id'];

    // Add ajax libraries.
    $form['#attached']['library'][] = 'core/drupal.ajax';
    $form['#attached']['library'][] = 'cn_core/ajax';
  }

  /**
   * Add ajax callback and wrapper to an element.
   *
   * @param array $form
   * @param array $element
   * @param string $callback
   * @param string $progress_message
   */
  public function addAjaxToElement(array &$form, array &$element, $callback = NULL, $progress_message = NULL) {

    // If no ajax callback, default to returning form.
    if (empty($callback)) {
      $callback = [$this, 'ajaxOpProcessConfig'];
    }

    $element['#ajax'] = [
      'callback' => $callback,
      'wrapper' => $form['#ajax_wrapper'],
    ];

    if (!empty($progress_message)) {
      $element['#ajax']['progress'] = [
        'type' => 'throbber',
        'message' => $progress_message,
      ];
    }
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   * @param Request $request
   * @return AjaxResponse
   */
  public function ajaxOpProcessConfig(array &$form, FormStateInterface $form_state, Request $request) {

    /** @var \Drupal\cn_core\Entity\UserInterface $account */
    $account = \Drupal::currentUser()->getAccount();

    $ajax_config = !empty(static::AJAX_CONFIG) ? static::AJAX_CONFIG : [];

    $form['status_messages'] = [
      '#type' => 'status_messages',
      '#weight' => -1000,
    ];

    /** @var \Drupal\Core\Ajax\AjaxResponse $response */
    $response = new AjaxResponse();

    $form_id = $this->getFormId();
    $form_dom_id = $form['#id'];
    $new_wrapper_id = !empty($form['#new_wrapper_id']) ? $form['#new_wrapper_id'] : Html::getUniqueId('ajax--wrapper');

    if ($form_state->getErrors()) {
      $route_match = \Drupal::routeMatch();
      $response = \Drupal::service('main_content_renderer.ajax')->renderResponse($form, $request, $route_match);
      $response->addCommand(new FormSubmitFailCommand($form_id, $form_dom_id, $new_wrapper_id));

      if (isset($ajax_config['submit_fail']['smooth_scroll'])) {
        $smooth_scroll_target = (!empty($ajax_config['submit_success']['smooth_scroll']) && is_string($ajax_config['submit_success']['smooth_scroll'])) ? $ajax_config['submit_success']['smooth_scroll'] : '.dialog-off-canvas-main-canvas';
        $response->addCommand(new InvokeCommand('body', 'smoothScrollToTarget', [$smooth_scroll_target]));
      }
      return $response;
    }
    $response->addCommand(new FormSubmitPassCommand($form_id, $form_dom_id, $new_wrapper_id));

    // Check for ajax redirect.
    if (!empty($ajax_config['submit_success'])) {
      if (!empty($ajax_config['submit_success']['redirect'])) {
        foreach ($ajax_config['submit_success']['redirect'] as $route_name => $conditions) {
          if ($conditions === TRUE) {
            $redirect_url = Url::fromRoute($route_name);
            break;
          }
          elseif (is_array($conditions)) {
            if (!empty($conditions['role'])) {
              if ($account->hasRole($conditions['role'])) {
                $redirect_url = Url::fromRoute($route_name);
                break;
              }
            }
          }
        }

        if (!empty($redirect_url)) {
          $response->addCommand(new RedirectCommand($redirect_url->toString()));
        }
      }

      if (isset($ajax_config['submit_success']['smooth_scroll'])) {
        $smooth_scroll_target = !empty($ajax_config['submit_success']['smooth_scroll']) ? $ajax_config['submit_success']['smooth_scroll'] : '.dialog-off-canvas-main-canvas';
        $response->addCommand(new InvokeCommand('body', 'smoothScrollToTarget', [$smooth_scroll_target]));
      }
    }

    return $response;
  }

  /**
   * Generic submit handler to rebuild the form.
   *
   * @param array $form
   *   The form structure.
   * @param FormStateInterface $form_state
   *   The form state.
   */
  public function submitFormRebuild(array &$form, FormStateInterface $form_state) {
    $form_state->setRebuild(TRUE);
  }

  /**
   * Set the ajax config and attach any handlers.
   *
   * @param array $form
   *   The form structure.
   * @param FormStateInterface $form_state
   *   The form state.
   */
  public function setAjaxFormConfig(array &$form, FormStateInterface $form_state, $ajaxConfig) {
    $this->ajaxConfig = $ajaxConfig;
    $form['#submit'][] = [$this, 'ajaxProcessConfigSubmitForm'];
  }

  /**
   * Process ajax config in submit handler.
   *
   * @param array $form
   *   The form structure.
   * @param FormStateInterface $form_state
   *   The form state.
   */
  public function ajaxProcessConfigSubmitForm(array &$form, FormStateInterface $form_state) {
    if (empty($this->ajaxConfig)) {
      return;
    }
  }

}
