#!/usr/bin/env bash

exec_name=$0

usage() {
    echo "usage: ${exec_name} <xcf-file> <png-file>" 1>&2
    exit 1
}

warn() {
    echo "${exec_name}: warning: $1" 1>&2
}

fatal() {
    echo "${exec_name}: fatal: $1" 1>&2
    exit 1
}

if (( $# != 2 )); then
    usage
fi

xcf_file=$1
png_file=$2

if [[ $xcf_file != *.xcf ]]; then
    warn "does not end in .xcf: $xcf_file"
fi

if [[ $png_file != *.png ]]; then
    warn "does not end in .png: $png_file"
fi

if [[ ! -f $xcf_file ]]; then
    fatal "no such file: $xcf_file"
fi

if ! command -v gimp &>/dev/null; then
    fatal "no such executable: gimp"
fi

if [[ ! -d $(dirname "$png_file") ]]; then
    fatal "no such directory: $(dirname "$png_file")"
fi

gimp -i -b "$(cat <<EOF
(gimp-message-set-handler 1) ; print to stdout
(let ((mode RUN-NONINTERACTIVE)
      (in-fname "${xcf_file}")
      (out-fname "${png_file}"))
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
(gimp-quit 0)
EOF
)"
