#!/usr/bin/env bash

set -euo pipefail

cmd_args=(bash)
if [[ -n "$1" ]]; then
    cmd_args=("${cmd_args[@]}" -c "$1")
fi

docker=(docker)
if [[ "$OSTYPE" != darwin* ]] && [[ "$EUID" != 0 ]]; then
    docker=(sudo -E "${docker[@]}")
fi

repo="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"

if [[ -z "${NO_BUILD:-}" ]]; then
    docker_build=(docker build . -t intuitive-explanations)
    echo >&2 "${docker_build[@]}"
    "${docker_build[@]}"
fi

it=
if [[ -t 1 ]]; then
    it="-it"
fi

cmd=(
    "${docker[@]}" run --rm "${it[@]}" -v "${repo}:/src" -w /src --network=host
    -e NETLIFY_KEY -e ENABLE_ANALYTICS --entrypoint=/src/tools/docker-pid1.bash
    intuitive-explanations "${cmd_args[@]}"
)

echo >&2 "${cmd[@]}"
exec "${cmd[@]}"
