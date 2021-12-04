#!/usr/bin/env bash

set -euo pipefail

cat <<"EOF" > /etc/sudoers.d/intuitive-explanations
%sudo ALL=(ALL:ALL) NOPASSWD: ALL
EOF

groupadd -g "$(stat -c %g "$PWD")" -o -p '!' -r docker
useradd -u "$(stat -c %u "$PWD")" -g "$(stat -c %g "$PWD")" -o -p '!' -m -N -l -s /usr/bin/bash -G sudo docker

runuser -u docker touch /home/docker/.sudo_as_admin_successful
runuser -u docker npm install

if (( "$#" == 0 )); then
    set -- bash
fi

exec runuser -u docker -- "$@"
