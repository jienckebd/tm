#!/bin/sh

alias=$1

drush ${alias} cr

drush ${alias} config-delete system.action.media_delete_action &&
drush ${alias} config-delete system.action.media_publish_action &&
drush ${alias} config-delete system.action.media_save_action &&
drush ${alias} config-delete system.action.message_delete_action &&
drush ${alias} config-delete system.action.media_unpublish_action

drush ${alias} updb --entity-updates -y

drush ${alias} en field_permissions -y

drush ${alias} en cn_core -y

drush ${alias} updb --entity-updates -y

drush ${alias} cim -y

drush ${alias} cr

drush ${alias} en sys_core -y

drush ${alias} php-eval '\Drupal::service("deploy.internal")->postDeploy()'

drush ${alias} cr
