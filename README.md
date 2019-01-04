# Intuitive Explanations

[My personal website][ie]!

## Dependencies

* [Git](https://git-scm.com/) (to obtain and contribute to the code)
* [Python 2](https://www.python.org/) (to run SCons)
* [Pipenv](https://pipenv.readthedocs.io/en/latest/) (to install the
  Python dependencies)
* [SCons](http://scons.org/) (to build the project)
* [LaTeX](https://www.latex-project.org/) (to render the TeX files to PDFs)
* [GIMP](https://www.gimp.org/) (to render the XCF files to PNGs)
* [Hugo](https://gohugo.io/) (to build the website)

### Installation on macOS

Install the command-line tools:

    $ xcode-select --install

Install Homebrew:

    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Install Python 2 from Homebrew:

    $ brew install python

Set up a virtual environment:

    $ pipenv install --two

Install SCons:

    $ brew install scons

Install TeX Live:

    $ brew cask install mactex

Install GIMP:

    $ brew cask install gimp
    $ cd /Applications/GIMP-2.10.app/Contents/MacOS
    $ ln python python2
    $ cat > ~/.local/bin/gimp <<"EOF"
    #!/bin/sh
    /Applications/GIMP-2.10.app/Contents/MacOS/gimp "$@"
    EOF

Install Hugo:

    $ brew install hugo

## Development

Clone the repo:

    $ git clone --recursive https://github.com/raxod502/intuitive-explanations.git
    $ cd intuitive-explanations

Build the website:

    $ pipenv run scons

Run the development server (this will live-reload changes to the
primary content of the website, although *not* changes to the
favicons, redirects, or LaTeX):

    $ hugo server

Clean build artifacts:

    $ pipenv run scons -c

Build and deploy to Netlify:

    $ pipenv run scons deploy

Check out the [Travis build][travis].

[ie]: https://intuitive-explanations.netlify.com/
[travis]: https://travis-ci.org/raxod502/intuitive-explanations
