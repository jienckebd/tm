<?php

namespace Drupal\cn_core\Form;

use Drupal\Core\Form\FormBuilder as Base;
use Drupal\Component\Utility\UrlHelper;

/**
 * Provides form building and processing.
 *
 * @ingroup form_api
 */
class FormBuilder extends Base {

  /**
   * Helper function to preserve the original form action in ajax requests.
   *
   * Views Bulk Operations has issues when the form action is switched to
   * /views/ajax. This is a known issue in core and no good solutions currently.
   *
   * @see https://www.drupal.org/project/drupal/issues/2844823
   *
   * @param array $form
   *   The form structure.
   */
  public function preserveFormAction(array &$form) {
    $request = \Drupal::request();

    // Either get the action from POST, or take the original $form['#action'].
    $action_from_post = $request->request->get('original_action');
    if (!empty($action_from_post)) {
      $action = $action_from_post;
    }
    else {
      $action = UrlHelper::encodePath($form['#action']);
    }

    // Add a hidden form element to the form to track the original action with any
    // updates to the query.
    $form['original_action'] = [
      '#type' => 'hidden',
      '#value' => $action,
    ];

    // If this is an ajax callback and the action has been set to /views/ajax,
    // replace this with the original action of the form.
    if (preg_match("/^\/views\/ajax/", $form['#action'])) {
      $form['#action'] = str_replace('/views/ajax', $action, $form['#action']);
    }
  }

}
