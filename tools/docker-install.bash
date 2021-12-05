#!/usr/bin/env bash

set -euo pipefail

packages="

# for managing the repository
git

# we use a makefile, also needed for native extensions
make

# for 'make help'
bsdmainutils

# for installing eleventy
npm

# compiling latex
texlive
texlive-xetex
latexmk

# for package 'fourier', otherwise the danger triangle icon in
# Intuitive Explanations silently gets turned into a capital letter B
#
# nb I hate computers
texlive-fonts-extra

# fonts used in resume
ttf-mscorefonts-installer

# in case we need superuser
sudo

# convenient to edit config files and such in a pinch
vim

# for deploy
curl

# for markdown link checking script
python3

# fiction writing stories
pandoc

"

# You need to manually accept Microsoft's license agreement to install
# the fonts
echo ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula \
     select true | debconf-set-selections

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y $(grep -v "^#" <<< "$packages")
rm -rf /var/lib/apt/lists/*

rm "$0"
