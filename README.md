# Intuitive Explanations

Check out [my personal website]!

[my personal website]: https://intuitiveexplanations.com

Unfortunately, I made it a long time ago so it's hosted on Wordpress.
I now hate Wordpress, and am moving it to [Hugo]. It's a work in
progress!

[hugo]: https://gohugo.io/

## Development

The dependencies are:
* [Hugo](https://gohugo.io/)
* [LaTeX](https://www.latex-project.org/get/)

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
