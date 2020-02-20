<?php

namespace Drupal\cn_core\Menu;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Menu\MenuLinkInterface;
use Drupal\Core\Menu\DefaultMenuLinkTreeManipulators as Base;

/**
 * Provides a couple of menu link tree manipulators by extending core.
 */
class DefaultMenuLinkTreeManipulators extends Base {

  /**
   * {inheritdoc}
   */
  protected function menuLinkCheckAccess(MenuLinkInterface $instance) {
    // Bypass the "link to any page" permission in core.
    $access_result = NULL;
    $url = $instance->getUrlObject();

    // When no route name is specified, this must be an external link.
    if (!$url->isRouted()) {
      $access_result = AccessResult::allowed();
    }
    else {
      $access_result = $this->accessManager->checkNamedRoute($url->getRouteName(), $url->getRouteParameters(), $this->account, TRUE);
    }
    return $access_result->cachePerPermissions();
  }

}
