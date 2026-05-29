#!/usr/bin/env bash

set -euo pipefail

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl gnupg lsb-release

curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor -o /usr/share/keyrings/nodesource.gpg

# Node.js 26.x LTS supported until April 2029
tee -a /etc/apt/sources.list.d/nodejs.list >/dev/null <<EOF
deb [arch=amd64 signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_26.x nodistro main
EOF

packages="

# for managing the repository
git

# we use a makefile, also needed for native extensions
make

# for 'make help'
bsdmainutils

# for installing and running static site generator
nodejs

# compiling latex
texlive
texlive-xetex
latexmk

# for package 'fourier', otherwise the danger triangle icon in
# Intuitive Explanations silently gets turned into a capital letter B
#
# nb I hate computers
texlive-fonts-extra

# fonts used in fiction writing
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

apt-get update
apt-get install -y $(grep -v "^#" <<< "$packages")
rm -rf /var/lib/apt/lists/*

# https://tug.org/pipermail/dvipdfmx/2026-January/000399.html
# https://github.com/TeX-Live/texlive-source/commit/00f27c6d3b1ee13afba6739d94af2837c36bdbd8
curl -fsSL https://github.com/TeX-Live/texlive-source/releases/download/svn77609/texlive-bin-x86_64-linux.tar.gz | \
     tar -xzf- -C /usr/bin --strip-components=1 x86_64-linux/xdvipdfmx

rm "$0"
