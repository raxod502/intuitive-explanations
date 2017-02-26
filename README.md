# Intuitive Explanations

[![Build Status](https://travis-ci.org/raxod502/intuitive-explanations.svg?branch=master)](https://travis-ci.org/raxod502/intuitive-explanations)

[Here][ie] is my personal website in Wordpress. This repository holds
the new version in [Hugo], which will soon replace it.

## Development

The dependencies are:
* [Hugo]
* [LaTeX]

Make sure you clone the submodules of this repository. You can do this
with a recursive clone:

    $ git clone --recursive https://github.com/raxod502/intuitive-explanations.git

If you already cloned the repository, use this command to clone the
submodules:

    $ git submodule update --init --recursive

To start the development server at `localhost:1313`, run:

    $ make dev

To generate the static site in the `public` directory, run:

    $ make

To just build the LaTeX, run:

    $ make tex

To just build the `static` directory, which holds static files to be
served from the website, run:

    $ make static

To build the static site in `public` without running any other steps,
run:

    $ make public

To run the development server without running any other steps, run:

    $ make server

To remove build artifacts, run:

    $ make clean

[hugo]: https://gohugo.io/
[ie]: https://intuitiveexplanations.com
[latex]: https://www.latex-project.org/get/
