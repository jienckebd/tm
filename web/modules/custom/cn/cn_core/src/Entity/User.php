<?php

namespace Drupal\cn_core\Entity;

use Drupal\user\Entity\User as Base;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Entity\EntityStorageInterface;

/**
 * Extends core user entity.
 */
class User extends Base implements UserInterface {

  /**
   * Extends core hasRole to support array of multiple roles to check.
   */
  public function hasRole($rid) {
    if (is_array($rid)) {
      return (bool) array_intersect($rid, $this->getRoles());
    }
    return in_array($rid, $this->getRoles());
  }

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    /** @var \Drupal\Core\Field\BaseFieldDefinition[] $fields */
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['realname'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Real Name'))
      ->setDescription(t('The real name of this user.'))
      ->setRequired(FALSE)
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    return $fields;
  }

  /**
   * {@inheritdoc}
   */
  public function preSave(EntityStorageInterface $storage) {

    if (!$this->get('field_first_name')->isEmpty()) {
      $pattern = "[user:field_first_name]";

      if (!$this->get('field_last_name')->isEmpty()) {
        $pattern .= " [user:field_last_name]";
      }
      $realname = \Drupal::token()->replace($pattern, ['user' => $this], ['clear' => TRUE, 'sanitize' => FALSE]);
    }

    if (empty($realname)) {
      $realname = $this->getUsername();
    }

    $this->set('realname', $realname);

    parent::preSave($storage);
  }

}
