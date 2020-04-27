#!/usr/bin/env bash

set -e
set -o pipefail

if (( $# != 1 )); then
    echo "usage: docker-install.bash UID" >&2
    exit 1
fi

uid="$1"

packages="

# for managing the repository
git

# we use a makefile, also needed for native extensions
make

# for 'make help'
bsdmainutils

# for installing Bundler
ruby

# building native extensions for Jekyll deps
gcc
g++
ruby-dev

# for converting XCF to PNG
gimp

# compiling latex
texlive
texlive-xetex
latexmk

# for package 'fourier', otherwise the danger triangle in Intuitive
# Explanations silently gets turned into a capital letter B
#
# nb I hate computers
texlive-fonts-extra

# cargo cult, this was included in the Travis config under a commit
# with message 'Fix several bugs for Travis' and I don't want to find
# out what those bugs were
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

echo ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula \
     select true | debconf-set-selections

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y $(grep -v "^#" <<< "$packages")
rm -rf /var/lib/apt/lists/*

# Can't install ruby-bundler from APT, otherwise we get weird error
# <https://github.com/rbenv/rbenv/issues/1138>.
gem install bundler

useradd --uid="$uid" --create-home --groups sudo docker
passwd -d docker

rm "$0"
