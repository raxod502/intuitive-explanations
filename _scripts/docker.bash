#!/usr/bin/env bash

set -e
set -o pipefail

args=(bash)
if [[ -n "$1" ]]; then
    args=("${args[@]}" -c "$1")
fi

docker() {
    if [[ "$OSTYPE" != darwin* ]] && [[ "$EUID" != 0 ]]; then
        command sudo docker "$@"
    else
        command docker "$@"
    fi
}

PORT="${PORT:-4000}"

if [[ -z "${NO_BUILD:-}" ]]; then
    docker build . -t intuitive-explanations --build-arg "UID=$UID"
fi

# Putting the deploy key in the command line is considered bad
# practice. However we must do it to work around a Docker bug, see
# <https://github.com/moby/moby/issues/40221>.
docker run -it --rm -v "$PWD:/home/docker/src" \
       -e "PORT=${PORT}" -e "HOST=0.0.0.0" -e "NETLIFY_KEY=${NETLIFY_KEY}" \
       -p "${PORT}:${PORT}" \
       intuitive-explanations "${args[@]}"
