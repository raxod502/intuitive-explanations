#!/usr/bin/env bash

set -e
set -o pipefail

die() {
    echo "deploy.bash: fatal: $1" 1>&2
    exit 1
}

tmpdir=
cleanup() {
    if [[ -n "$tmpdir" ]]; then
        rm -rf "$tmpdir"
    fi
}

trap cleanup ERR EXIT

if [[ -z $NETLIFY_KEY ]]; then
    die "environment variable not set: NETLIFY_KEY"
fi

tmpdir="$(mktemp -d "${TMPDIR:-/tmp}/intuitive-explanations.XXXXXX")"
zipfile="${tmpdir}/site.zip"
pushd _site
zip -r "$zipfile" .
popd >/dev/null

echo "Deploying..."

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer ${NETLIFY_KEY}" \
     --data-binary @"${zipfile}" \
     https://api.netlify.com/api/v1/sites/intuitive-explanations.netlify.com/deploys

rm -rf "$tmpdir"

echo
echo "Finished."
