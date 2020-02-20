#!/bin/sh

alias=$1

drush ${alias} cr
drush ${alias} sql-query "DROP TABLE IF EXISTS captcha_sessions;"
drush ${alias} cim sync -y
drush ${alias} updb -y
drush ${alias} cr
