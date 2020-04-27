# Intuitive Explanations

This is the home of my personal website. Most of it is open-source,
there are just one or two small pieces which are kept in private
submodules (such as my resume) to which the deploy system has access.
You can build the website yourself without these components.

## Development

Install:

* [Git](https://git-scm.com/)
* [Make](https://www.gnu.org/software/make/)
* [Docker](https://www.docker.com/)

Clone this repository and run:

    $ make docker

At this point you will be in a shell with all the dependencies
installed. Run:

    $ make help
    usage:
      make help    Show this message
      make all     Fully build website
      make dev     Fully build website and then run dev server
      make serve   Run developer server
      make build   Build main website content
      make tex     Compile LaTeX
      make resume  Compile resume
      make xcf     Compile XCF images
      make clean   Remove build artifacts
      make deploy  Deploy website to Netlify
      make docker  Start a Docker shell

When a commit is pushed to `master`, it is deployed automatically by
[CircleCI](https://circleci.com/) to
[Netlify](https://www.netlify.com/) after about ten minutes.
