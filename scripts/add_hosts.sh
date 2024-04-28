#!/bin/bash

set -eu

insert_if_not_exists() {
  if [ $(grep -x "$1" /etc/hosts | wc -l) -eq 0 ]; then
    echo "$1" | sudo sh -c 'cat - >> /etc/hosts'
  fi
}

insert_if_not_exists "127.0.0.1 dev.local"
insert_if_not_exists "::1 dev.local"
insert_if_not_exists "127.0.0.1 api.dev.local"
insert_if_not_exists "::1 api.dev.local"