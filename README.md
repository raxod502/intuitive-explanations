# Intuitive Explanations

[My personal website][ie]!

## Dependencies

* [Git](https://git-scm.com/) (to obtain and contribute to the code)
* [Python 2](https://www.python.org/) (to run SCons)
* [SCons](http://scons.org/) (to build the project)
* [LaTeX](https://www.latex-project.org/) (to render the PDFs)
* [Hugo](https://gohugo.io/) (to build the website)

### Installation on macOS

Install the command-line tools:

    $ xcode-select --install

Install Homebrew:

    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Install Python 2 from Homebrew:

    $ brew install python

Install SCons:

    $ brew install scons

Install TeX Live:

    $ brew cask install basictex

Make your TeX Live installation customizable (you may need to use a
different directory than `2016basic`, if you are using a more or less
recent installation of TeX Live):

    $ sudo chown -R YOUR_USERNAME:staff /usr/local/texlive/2016basic/tlpkg

Install LaTeX packages:

> Open up `.travis.yml` and run the `tlmgr install` command that is
> listed in the `install` section.

Install Hugo:

    $ brew install hugo

## Development

Clone the repo:

    $ git clone --recursive https://github.com/raxod502/intuitive-explanations.git

Build the website:

    $ scons

Run the development server (this will live-reload changes to the
primary content of the website, although *not* changes to the
favicons, redirects, or LaTeX):

    $ hugo server

Clean build artifacts:

    $ scons -c

Build and deploy to Netlify:

    $ scons deploy

Check out the [Travis build][travis].

[ie]: https://intuitive-explanations.netlify.com/
[travis]: https://travis-ci.org/raxod502/intuitive-explanations
