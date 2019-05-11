# Intuitive Explanations

This is the home of my personal website. The build system is not
currently optimized for use by people who do not have access to my
private repositories on GitHub, but that could be easily changed.
[Open an
issue](https://github.com/raxod502/intuitive-explanations/issues) if
you want to contribute and this is an issue for you.

## Dependencies

* [Git](https://git-scm.com/)
* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](https://bundler.io/)
* [Make](https://www.gnu.org/software/make/)
* [Tectonic](https://tectonic-typesetting.github.io/en-US/)
* [GIMP](https://www.gimp.org/)

### Installation on macOS

Disclaimer: running these commands will not necessarily do what you
want. They are meant as a quick reference for people who already know
what they do. I am not responsible for your decisions as a system
administrator.

    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    $ brew install git ruby tectonic
    $ brew cask install gimp
    $ ln python /Applications/GIMP-2.10.app/Contents/MacOS/python2
    $ cat <<"EOF" > ~/.local/bin/gimp
    #!/bin/sh
    /Applications/GIMP-2.10.app/Contents/MacOS/gimp "$@"
    EOF
    $ export PATH="/usr/local/opt/ruby/bin:$PATH"
    $ export PATH="/usr/local/lib/ruby/gems/2.6.0/bin:$PATH"
    $ hash -r

## Build

This repository uses submodules. Make sure to clone recursively.

Install Ruby dependencies:

    $ bundle install

Build everything and then watch for content changes:

    $ make dev

Remove build artifacts:

    $ make clean

Deploy built website (done automatically by Travis CI):

    $ make deploy

Check the [Makefile](Makefile) for additional targets.
