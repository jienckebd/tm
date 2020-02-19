<?php

namespace Drupal\cn_core\Entity;

use Drupal\user\UserInterface as Base;

/**
 * Provides an interface defining a user entity.
 *
 * @ingroup user_api
 */
interface UserInterface extends Base {

  /**
   * Whether a user has a certain role.
   *
   * @param string|array $rid
   *   The role ID or IDs to check.
   *
   * @return bool
   *   Returns TRUE if the user has the role, otherwise FALSE.
   */
  public function hasRole($rid);

}
