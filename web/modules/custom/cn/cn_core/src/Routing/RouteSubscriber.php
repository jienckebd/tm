<?php

namespace Drupal\cn_core\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Listens to the dynamic route events.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * The entity form routes.
   */
  const ENTITY_FORM_ROUTES = [
    'node.add',
    'entity.node.edit_form',
    'entity.taxonomy_term.add_form',
    'entity.taxonomy_term.edit_form',
    'user.admin_create',
    'entity.user.edit_form',
    'entity.media.add_form',
    'entity.media.edit_form',
  ];

  /**
   * The entity display routes.
   */
  const ENTITY_DISPLAY_ROUTES = [
    'entity.node.canonical',
    'entity.taxonomy_term.edit_form',
    'entity.user.canonical',
    'entity.media.canonical',
  ];

  /**
   * Remove these routes in favor of page manager.
   */
  const REMOVE_ROUTES = [
    'user.register',
    'user.login',
    'user.login.http',
  ];

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    if ($route = $collection->get('views.ajax')) {
      $route->setDefault('_controller', '\Drupal\cn_core\Controller\ViewsAjaxController::ajaxView');
    }

    foreach (static::ENTITY_FORM_ROUTES as $entity_form_route) {
      if ($route = $collection->get($entity_form_route)) {
        $route->setOption('_entity_form_route', 'TRUE');
      }
    }

    foreach (static::ENTITY_DISPLAY_ROUTES as $entity_display_route) {
      if ($route = $collection->get($entity_display_route)) {
        $route->setOption('_entity_display_route', 'TRUE');
      }
    }

    foreach (static::REMOVE_ROUTES as $remove_route) {
      if ($route = $collection->get($remove_route)) {
        $collection->remove($remove_route);
      }
    }

  }

}
