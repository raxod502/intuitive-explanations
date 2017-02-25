#!/usr/bin/env sh

# This script is mostly based on the one from the LaTeX3 repository
# [1].
#
# [1]: https://github.com/latex3/latex3/blob/8fcb9ef6fdf536fcdf17a8c91d06cb085012bbee/support/texlive.sh

export PATH=/tmp/texlive/bin/x86_64-linux:$PATH
if ! command -v texlua > /dev/null; then
    wget http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
    tar -xzf install-tl-unx.tar.gz
    cd install-tl-20*
    ./install-tl --profile=../support/texlive.profile
    cd ..
fi
