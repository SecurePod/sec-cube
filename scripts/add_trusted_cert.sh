#!/bin/bash

set -eu

sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain nginx/ssl/server.crt