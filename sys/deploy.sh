#!/bin/bash

cd /var/www/web
drush cr
drush sql-query "DROP TABLE captcha_sessions;"
drush cim sync -y
drush updb -y
drush cr
drush php-script ../sys/deploy.php
