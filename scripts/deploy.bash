#!/usr/bin/env bash

set -e
set -o pipefail

exec_name=$0

usage() {
    echo "usage: ${exec_name} <zip-file>" 1>&2
    exit 1
}

fatal() {
    echo "${exec_name}: fatal: $1" 1>&2
    exit 1
}

if (( $# != 1 )); then
    usage
fi

zip_file=$1

if [[ ! -f $zip_file ]]; then
    fatal "no such file: $zip_file"
fi

if [[ -z $NETLIFY_KEY ]]; then
    fatal "environment variable not set: NETLIFY_KEY"
fi

echo "Deploying..."

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer ${NETLIFY_KEY}" \
     --data-binary @${zip_file} \
     https://api.netlify.com/api/v1/sites/intuitive-explanations.netlify.com/deploys

echo "Deployed to intuitiveexplanations.com"
