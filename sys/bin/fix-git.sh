#!/bin/bash

find . -mindepth 2 -type d -name .git | xargs rm -rf
