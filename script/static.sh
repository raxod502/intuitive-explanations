#!/usr/bin/env bash

shopt -s dotglob

rm -fr static
mkdir static
cp tex/documents/*/*.pdf static
cp favicon/* static
cp files/* static
