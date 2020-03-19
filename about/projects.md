---
title: "Projects"
redirect_from:
  - /other-projects/
---

This page lists some of my open-source projects. You can find the
source code for all of these projects and more on [GitHub].

## Finished personal projects

All of my open-source projects receive continued maintenance when
needed. The dates below, however, show when most of the major
development happened.

* [TerrariaClone] (Spring 2011 -- Spring 2013; [HackerNews
  thread][tc-hn]): My first major project, a clone of [Terraria],
  preserved as an example of how terrible code can be if you don't pay
  attention to its quality.
* [Chrono Count] (Summer 2013 -- Spring 2014): iOS app to manage
  countdowns and countups under arbitrarily complex schedules,
  previously available from the iOS App Store.
* [*Calculus: Intuitive Explanations*][cie] (Summer -- Fall 2015;
  [source][cie-source]): 67 pages of [LaTeX] content, from limits to
  vector analysis, with 35 [Ti*k*Z][tikz] figures.
* [*Differential Equation Solution Strategies*][dess] (Spring 2016;
  [source][dess-source]): Summary of strategies for solving different
  types of [differential equations], with proofs.
* [*Linear Algebra Summary Sheet*][lass] (Spring 2016;
  [source][lass-source]): Quick reference for important [linear
  algebra] theorems, grouped so that making connections is easy.
* [puzzles] (Summer 2016): Solvers for [KenKen] and [Sudoku] puzzles in
  [Clojure].
* [empty] (Summer 2016): Absolute bare minimum [Leiningen] template.
* [Radian] (Summer 2016 -- Present): Elegant but practical
  configurations for [Emacs], [Zsh], [Tmux], and [Git].
* [conway] (Fall 2016): A simple solver for generalized
  [Slothouber-Graatsma \(Conway\) puzzles][sg-puzzles] in [Clojure].
* [smarter-playlist] (Fall 2016): [Clojure] application to generate
  iTunes playlists combining variety, cohesiveness, and novelty.
* [`el-patch`][el-patch] (Spring 2017 -- Fall 2018): [Emacs] package
  for future-proofing Emacs Lisp customizations.
* [`straight.el`][straight.el] (Spring 2017 -- Present):
  Next-generation, purely functional package manager for the [Emacs]
  hacker.
* [`intuitiveexplanations.com`][ie] (Spring 2017 -- Present): Personal
  website built on [Travis CI/CD][travis] using [Make], [Jekyll],
  [LaTeX], [GIMP] and hosted on [Netlify].
* [diary-manager] (Spring 2017 -- Summer 2018): Command-line tool and
  [Emacs] package for managing daily (encrypted, version-controlled)
  diary entries.
* [mla-tex] (Spring 2017 -- Fall 2018): [LaTeX][latex] [document
  class] for typesetting papers to [MLA] formatting standards.
* [wdx] (Fall 2017): Simpler and more robust alternative to [wd],
  written in Python.
* [`prescient.el`][prescient.el] (Fall 2017 -- Present): Simple but
  effective sorting and filtering for [Emacs].
* [Hyperschedule] (Fall 2017 -- Present;
  [source][hyperschedule-source]): Fast and powerful course scheduler
  for the [Claremont Colleges].
* [heroku-buildpack-emacs] (Summer 2018): [Heroku] buildpack to
  install [Emacs].
* [GNU ELPA Mirror][gnu-elpa-mirror] (Summer 2018 -- Summer 2019):
  GitHub mirror of the [GNU ELPA][gnu-elpa] and [Emacsmirror] package
  repositories for use with [`straight.el`][straight.el].
* [Blackout] (Fall 2018): Unified replacement for
  [`diminish.el`][diminish.el], [`delight.el`][delight.el], and
  [`dim.el`][dim.el]; allows hiding or customizing major and minor
  mode lighters in [Emacs].
* [Tidier] (Spring 2019): Small application to auto-close abandoned
  GitHub issues by label and activity.
* [Apheleia] (Summer 2019): Run code formatters on [Emacs] buffer
  contents without moving the cursor position, using [RCS patches] and
  [dynamic programming].

## In-progress personal projects

* [µTunes][utunes] (Summer 2019 -- Present): Aggressively minimal
  command-line music player and library manager following the [UNIX
  philosophy], with [Emacs] interface. Attempt #3 at a personal music
  library manager.
* [Tabcrush] (Summer 2019 -- Present): High-performance power tool for
  editing large-scale tabular data in [Emacs].
* [Mercury] (Summer 2019 -- Present): [Emacs] interface to [Facebook
  Messenger], [Signal], and SMS (via [Google Hangouts][hangouts])
* [Selectrum] (Fall 2020 -- Present): Completion and incremental
  narrowing framework for [Emacs], replacing [Ivy] and [Helm].
* [CTRLF] (Winter 2020 -- Present): Better single-buffer text search
  interface for [Emacs], replacing [Isearch] and [Swiper].

## Work projects

(See also my [resume](/assets/Resume.pdf), which includes proprietary
work experience as well.)

* [cortex.optimise] (Spring -- Summer 2016, ThinkTopic):
  General-purpose library for analyzing, visualizing, and comparing
  [gradient descent] algorithms.
* [lazy-map] (Fall 2017, ThinkTopic): Lazy map implementation for
  [Clojure].
* [UPM] (Summer 2019, [Repl.it]): Universal package-management
  interface for Python, Node.js, Ruby, and Emacs Lisp.

## School projects

* [MazeGen] (Fall 2014, [Boulder High School][bhs], Design
  Technology): [Java] application to generate and visualize
  laser-cutter schematics for three-dimensional marble mazes.
* [layerize] (Fall 2015, [Boulder High School][bhs], Design
  Technology): [Clojure] application to generate and visualize
  laser-cutter schematics for a cross-sectional model of a "[Möbius
  solid][layerize-inspiration]".
* [JFLAP Autograder] (Fall 2016, [Harvey Mudd College][hmc], CS 42:
  Principles & Practice): Script to automatically run test cases
  against student-submitted [DFAs], [NFAs], or [Turing machines] in
  [JFLAP] format.
* [VotingLib] (Fall 2016, [Harvey Mudd College][hmc], MATH 189G:
  Mathematics of Voting): [Java] library written for a short research
  project investigating the performance of different voting systems
  assuming voter satisfaction can be modeled as a high-dimensional
  Eucliean distance metric.
* [heroku-buildpack-git-lfs] (Spring 2019, [Harvey Mudd College][hmc],
  CS 121: Software Development): [Heroku] buildpack to install [Git
  LFS] and download assets transparently during build.
* [whales.life] (Spring 2019, [Harvey Mudd College][hmc], CS 121:
  Software Development): Simple webapp for playing [chess] against an
  AI using [minimax] and [neural networks].

## Abandoned projects

* [etunes] (Fall 2017 -- Summer 2018): [Declarative],
  [version-controlled][version control] music library manager for
  [Emacs]. Attempt #1 at a personal music library manager.
* [pset] (Fall 2017): Configurable templating system for university
  problem sets typeset in LaTeX.
* [Ishikk] (Summer 2018): Read-write [Google Calendar] interface for
  Emacs, with graphical week view.
* [Madeline] (Summer 2018): Novel approach to directory syncing, used
  to maintain complementary mirroring of two filesystem trees via SSH.
* [fstunes] (Winter 2019): Extremely minimal music library manager
  leveraging [UNIX filesystem] abstractions. Attempt #2 at a personal
  music library manager.

[apheleia]: https://github.com/raxod502/apheleia
[bhs]: https://boh.bvsd.org/Pages/default.aspx
[blackout]: https://github.com/raxod502/blackout
[chess]: https://en.wikipedia.org/wiki/Chess
[chrono count]: https://github.com/raxod502/chrono-count
[cie-source]: https://github.com/raxod502/intuitive-explanations/blob/master/_src/tex/documents/CalculusIntuitiveExplanations/CalculusIntuitiveExplanations.tex
[cie]: /math/calculus-intuitive-explanations/
[claremont colleges]: http://www.claremont.edu/
[clojure]: https://clojure.org/
[conway]: https://github.com/raxod502/conway
[cortex.optimise]: https://github.com/raxod502/cortex/tree/master/examples/optimise
[ctrlf]: https://github.com/raxod502/ctrlf
[declarative]: https://en.wikipedia.org/wiki/Declarative_programming
[delight.el]: https://elpa.gnu.org/packages/delight.html
[dess-source]: https://github.com/raxod502/intuitive-explanations/blob/master/_src/tex/documents/DifferentialEquationSolutionStrategies/DifferentialEquationSolutionStrategies.tex
[dess]: /math/differential-equation-solution-strategies/
[dfas]: https://en.wikipedia.org/wiki/Deterministic_finite_automaton
[diary-manager]: https://github.com/raxod502/diary-manager
[differential equations]: https://en.wikipedia.org/wiki/Differential_equation
[dim.el]: https://github.com/alezost/dim.el
[diminish.el]: https://github.com/myrjola/diminish.el
[document class]: https://en.wikibooks.org/wiki/LaTeX/Document_Structure#Document_classes
[dynamic programming]: https://en.wikipedia.org/wiki/Dynamic_programming
[el-patch]: https://github.com/raxod502/el-patch
[emacs]: https://www.gnu.org/software/emacs/
[emacsmirror]: https://emacsmirror.net/
[empty]: https://github.com/raxod502/empty
[etunes]: https://github.com/raxod502/etunes
[facebook messenger]: https://www.messenger.com/
[fstunes]: https://github.com/raxod502/fstunes
[gimp]: https://www.gimp.org/
[git lfs]: https://git-lfs.github.com/
[git]: https://git-scm.com/
[github]: https://github.com/raxod502
[gnu-elpa-mirror]: https://github.com/raxod502/gnu-elpa-mirror
[gnu-elpa]: https://elpa.gnu.org/
[google calendar]: https://calendar.google.com/
[gradient descent]: https://en.wikipedia.org/wiki/Gradient_descent
[hangouts]: https://hangouts.google.com/
[helm]: https://github.com/emacs-helm/helm
[heroku-buildpack-emacs]: https://github.com/raxod502/heroku-buildpack-emacs
[heroku-buildpack-git-lfs]: https://github.com/raxod502/heroku-buildpack-git-lfs
[heroku]: https://www.heroku.com/
[hmc]: https://www.hmc.edu/
[hyperschedule-source]: https://github.com/MuddCreates/hyperschedule
[hyperschedule]: https://github.com/MuddCreates/hyperschedule
[ie]: https://github.com/raxod502/intuitive-explanations
[isearch]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Incremental-Search.html
[ishikk]: https://github.com/raxod502/ishikk
[ivy]: https://github.com/abo-abo/swiper#ivy
[java]: https://www.java.com/
[jekyll]: https://jekyllrb.com/
[jflap autograder]: https://github.com/CSGreater-Developers/HMC-Grader/blob/master/app/plugins/autograder/newjflapgrader.py
[jflap]: http://www.jflap.org/
[kenken]: https://en.wikipedia.org/wiki/KenKen
[lass-source]: https://github.com/raxod502/intuitive-explanations/blob/master/_src/tex/documents/LinearAlgebraSummarySheet/LinearAlgebraSummarySheet.tex
[lass]: /math/linear-algebra-summary-sheet/
[latex]: https://www.latex-project.org/
[layerize-inspiration]: https://github.com/raxod502/layerize/blob/f9d598b5d15c47045729505cc1b7a3d3e077bb11/Inspiration.pdf
[layerize]: https://github.com/raxod502/layerize
[lazy-map]: https://github.com/raxod502/lazy-map
[leiningen]: https://leiningen.org/
[linear algebra]: https://en.wikipedia.org/wiki/Linear_algebra
[madeline]: https://github.com/raxod502/madeline
[make]: https://www.gnu.org/software/make/
[mazegen]: https://github.com/raxod502/MazeGen
[mercury]: https://github.com/raxod502/mercury
[minimax]: https://en.wikipedia.org/wiki/Minimax
[mla-tex]: https://github.com/raxod502/mla-tex
[mla]: https://owl.english.purdue.edu/owl/resource/747/24/
[netlify]: https://www.netlify.com/
[neural networks]: https://en.wikipedia.org/wiki/Artificial_neural_network
[nfas]: https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton
[prescient.el]: https://github.com/raxod502/prescient.el
[pset]: https://github.com/raxod502/pset
[puzzles]: https://github.com/raxod502/puzzles
[radian]: https://github.com/raxod502/radian
[rcs patches]: https://tools.ietf.org/doc/tcllib/html/rcs.html#section4
[repl.it]: https://repl.it/
[selectrum]: https://github.com/raxod502/selectrum
[sg-puzzles]: http://mathworld.wolfram.com/Slothouber-GraatsmaPuzzle.html
[signal]: https://signal.org/
[smarter-playlist]: https://github.com/raxod502/smarter-playlist
[straight.el]: https://github.com/raxod502/straight.el
[sudoku]: https://en.wikipedia.org/wiki/Sudoku
[swiper]: https://github.com/abo-abo/swiper#swiper
[tabcrush]: https://github.com/raxod502/tabcrush
[tc-hn]: https://news.ycombinator.com/item?id=15460851
[terraria]: https://terraria.org/
[terrariaclone]: https://github.com/raxod502/TerrariaClone
[tidier]: https://github.com/raxod502/tidier
[tikz]: https://en.wikipedia.org/wiki/PGF/TikZ
[tmux]: https://tmux.github.io/
[travis]: https://travis-ci.org/
[turing machines]: https://en.wikipedia.org/wiki/Turing_machine
[unix filesystem]: https://en.wikipedia.org/wiki/Unix_filesystem
[unix philosophy]: https://en.wikipedia.org/wiki/Unix_philosophy
[upm]: https://github.com/replit/upm
[utunes]: https://github.com/raxod502/utunes
[version control]: https://en.wikipedia.org/wiki/Version_control
[votinglib]: https://github.com/raxod502/VotingLib
[wd]: https://github.com/mfaerevaag/wd
[wdx]: https://github.com/raxod502/wdx
[whales.life-source]: https://github.com/raxod502/cs121-whales
[whales.life]: https://whales.life/
[zsh]: http://www.zsh.org/
