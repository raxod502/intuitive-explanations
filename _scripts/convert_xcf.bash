#!/usr/bin/env bash

set -e
set -o pipefail

raw=_src/xcf/raw
out=_src/xcf/out

readarray -t raw_names < <(ls "$raw")
readarray -t out_names < <(ls "$out")

# Delete files from 'out' that have been removed from 'raw'.
for out_name in "${out_names[@]}"; do
    raw_name="${out_name%.png}.xcf"
    if [[ ! -f "${raw}/${raw_name}" ]]; then
        rm "${out}/${out_name}"
    fi
done

# Re-generate files in 'out' that have been updated in 'raw'.
readarray -t raw_names_updated < <(
    for raw_name in "${raw_names[@]}"; do
        out_name="${raw_name%.xcf}.png"
        if [[ ! -f "${out}/${out_name}" ]]; then
            echo "$raw_name"
        elif [[ "${raw}/${raw_name}" -nt "${out}/${out_name}" ]]; then
            echo "$raw_name"
        fi
    done
)

if (( "${#raw_names_updated[@]}" != 0 )); then
    read -r -d "" code <<EOF || true
(gimp-message-set-handler 1) ; print to stdout
EOF
    all_code="${code}"$'\n'
    for raw_name in "${raw_names_updated[@]}"; do
        out_name="${raw_name%.xcf}.png"
        read -r -d "" code <<EOF || true
(let ((mode RUN-NONINTERACTIVE)
      (in-fname "${PWD}/${raw}/${raw_name}")
      (out-fname "${PWD}/${out}/${out_name}"))
  (gimp-message (string-append "Reading " in-fname))
  (let* ((image (car (gimp-file-load mode in-fname in-fname)))
         (drawable (car (gimp-image-merge-visible-layers image CLIP-TO-IMAGE))))
    (file-png-save mode image drawable out-fname out-fname
                   0 ; use interlacing?
                   9 ; compression level, 0 to 9
                   1 ; save background color?
                   0 ; save gamma?
                   0 ; save layer offset?
                   0 ; save physical pixel size data?
                   0 ; save modification time?
                   )
    (gimp-message (string-append "Wrote " out-fname))
    (gimp-image-delete image)))
EOF
        all_code="${all_code}${code}"$'\n'
    done
    read -r -d "" code <<EOF || true
(gimp-quit 0)
EOF
    all_code="${all_code}${code}"$'\n'
    gimp -i -b "$all_code"
else
    echo "Up to date!" 1>&2
fi

exit 0
