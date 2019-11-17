#!/usr/bin/env bash

set -e
set -o pipefail

bundle install --clean
exec "$@"
