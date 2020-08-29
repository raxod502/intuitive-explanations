---
title: "Projects"
redirect_from:
  - /other-projects/
---

This page lists some of my personal, work, and school projects. You
can find the source code for (almost) all of these projects and more
on [GitHub].

All of my open-source projects receive continued maintenance when
needed. The dates below, however, show when most of the major
development happened.

## Currently working on

* [Radian] (Summer 2016 -- Present): Elegant but practical
  configurations for [Emacs], [Zsh], [Tmux], and [Git].

## Emacs projects

* [`el-patch`][el-patch] (Winter 2016 -- Fall 2018): [Emacs] package
  for future-proofing Emacs Lisp customizations.
* [`straight.el`][straight.el] (Winter 2016 -- Present):
  Next-generation, purely functional package manager for the [Emacs]
  hacker.
* [diary-manager] (Spring 2017 -- Summer 2018): Command-line tool and
  [Emacs] package for managing daily (encrypted, version-controlled)
  diary entries.
* [`prescient.el`][prescient.el] (Fall 2017 -- Winter 2019): Simple
  but effective sorting and filtering for [Emacs].
* [heroku-buildpack-emacs] (Summer 2018): [Heroku] buildpack to
  install [Emacs].
* [GNU ELPA Mirror][gnu-elpa-mirror] (Summer 2018 -- Summer 2019):
  GitHub mirror of the [GNU ELPA][gnu-elpa] and [Emacsmirror] package
  repositories for use with [`straight.el`][straight.el].
* [Blackout] (Fall 2018): Unified replacement for
  [`diminish.el`][diminish.el], [`delight.el`][delight.el], and
  [`dim.el`][dim.el]; allows hiding or customizing major and minor
  mode lighters in [Emacs].
* [µTunes][utunes] (Spring -- Winter 2019): Aggressively minimal
  command-line music player and library manager following the [UNIX
  philosophy], with [Emacs] interface. Attempt #3 at a personal music
  library manager.
* [Apheleia] (Summer 2019): Run code formatters on [Emacs] buffer
  contents without moving the cursor position, using [RCS patches] and
  [dynamic programming].
* [Selectrum] (Fall 2019 -- Spring 2020): Completion and incremental
  narrowing framework for [Emacs], replacing [Ivy] and [Helm].
  *Co-maintainer: [Clemens Radermacher][clemera].*
* [CTRLF] (Winter 2019 -- Spring 2020): Better single-buffer text
  search interface for [Emacs], replacing [Isearch] and [Swiper].

## Games and apps

* [TerrariaClone] (Spring 2011 -- Spring 2013; [HackerNews
  thread][tc-hn]): My first major project, a clone of [Terraria],
  preserved as an example of how terrible code can be if you don't pay
  attention to its quality.
* [Chrono Count] (Summer 2013 -- Spring 2014): [iOS] app to manage
  countdowns and countups under arbitrarily complex schedules,
  previously available from the iOS App Store.
* [Gravity] (Winter 2013): Christmas present for my father. [iOS] app
  that simulates [many-body Newtonian gravity][n-body].
* [Christmas Rogue] (Winter 2014): Christmas present for my father.
  [Roguelike] game inspired by [Brogue] and implemented in [Java].
  Likely the most over-the-top Christmas present I will ever give.
* [Hyperschedule] (Fall 2017 -- Fall 2019;
  [source][hyperschedule-source]): Fast and powerful course scheduler
  for the [Claremont Colleges]. *Current maintainer: [Kye Shi][kye].*
* [GitHub Email Backlog][geb] (Summer 2020): Simple [Chrome
  extension][chrome-ext] which abuses the [GitHub notifications
  API][github-notifications] to automatically update my profile status
  with an estimate of how long you will wait for a response when you
  report an issue.

## Writing

* [*Calculus: Intuitive Explanations*][cie] (Summer -- Fall 2015;
  [source][cie-source]): 67 pages of [LaTeX] content, from limits to
  vector analysis, with 35 [Ti*k*Z][tikz] figures.
* [*Differential Equation Solution Strategies*][dess] (Spring 2016;
  [source][dess-source]): Summary of strategies for solving different
  types of [differential equations], with proofs.
* [*Linear Algebra Summary Sheet*][lass] (Spring 2016;
  [source][lass-source]): Quick reference for important [linear
  algebra] theorems, grouped so that making connections is easy.
* [`intuitiveexplanations.com`][ie] (Spring 2017 -- Present): Personal
  website built on [Travis CI/CD][travis] using [Make], [Jekyll],
  [LaTeX], [GIMP] and hosted on [Netlify].
* [mla-tex] (Spring 2017 -- Fall 2018): [LaTeX][latex] [document
  class] for typesetting papers to [MLA] formatting standards.

## Other personal projects

* [TI-84 programs][ti-84-programs] (Spring 2010 -- Spring 2016): My
  first programming ever, on the [TI-84 Plus Silver Edition][ti-84] in
  middle and high school.
* [puzzles] (Summer 2016): Solvers for [KenKen] and [Sudoku] puzzles in
  [Clojure].
* [empty] (Summer 2016): Absolute bare minimum [Leiningen] template.
* [conway] (Fall 2016): A simple solver for generalized
  [Slothouber-Graatsma \(Conway\) puzzles][sg-puzzles] in [Clojure].
* [smarter-playlist] (Fall 2016): [Clojure] application to generate
  iTunes playlists combining variety, cohesiveness, and novelty.
* [wdx] (Fall 2017): Simpler and more robust alternative to [wd],
  written in [Python].
* [Madeline] (Summer 2018): Novel approach to directory syncing, used
  to maintain complementary mirroring of two filesystem trees via SSH.
* [Tidier] (Spring 2019): Small application to auto-close abandoned
  GitHub issues by label and activity.
* [Kalyn] (Spring 2020; [blog post][kalyn-post]): Compile a high-level
  functional programming language, inspired by [Haskell] but with
  [Lisp] syntax, all the way to [ELF] binaries targeting [x86-64]
  without using any pre-existing components such as the [GNU][]
  [linker] or [C standard library][cstdlib].

## Work projects

(See also my [resume](/assets/Resume.pdf).)

* [Ecofasten] and [Alpine Snowboards] pricing calculators (Summer
  2015, ThinkTopic; proprietary): Frontend and backend work on
  existing [Clojure]/[ClojureScript]/[Datomic] web applications for
  generating price quotes for roof-mounted solar panels and alpine
  snowboards. *Teammates: [Charles Gruenwald][charles], [Keren
  Megory-Cohen][keren].*
* think.recommend (Winter 2015 -- Summer 2016, ThinkTopic;
  proprietary): Library for testing and benchmarking [collaborative
  filtering][cf] algorithms.
* [cortex.optimise] (Spring -- Summer 2016, ThinkTopic):
  General-purpose library for analyzing, visualizing, and comparing
  [gradient descent] algorithms.
* think.quality (Summer -- Winter 2016, ThinkTopic; proprietary): Tool
  for running company-wide [Clojure] code quality audits and dashboard
  to visualize results.
* CMS Changeset Dashboard (Summer 2017, [Quantcast]; proprietary):
  Full-stack administrator dashboard for an internal team to manage an
  internal database used by an internal webapp used by another
  internal team to manage another internal database. You can imagine
  the customer-facing impact.
* [lazy-map] (Fall 2017, ThinkTopic): Lazy [map] implementation for
  [Clojure].
* [UPM] (Summer 2019, [Repl.it]): Universal [package-management][pm]
  interface for [Python], [Node.js], [Ruby], and [Emacs Lisp][elisp].

## School projects

* [Science fair project][science-fair] (Fall -- Winter 2011, [Summer
  Middle School][summit]): [Boolean satisfiability solver][sat]
  applied to [Sudoku] solving.
* [Hangman 2 2 3 2][hangman2232] (Spring 2013, [Boulder High
  School][bhs], Advanced C++): Class project. [iOS] app that plays
  [hangman] or, depending on usage, the stock market.
* [Projectile Simulator] (Fall 2013, [Boulder High School][bhs], AP
  Physics C): Class project. Hacky [Python] GUI in
  [Tkinter](https://docs.python.org/3/library/tkinter.html) to solve
  arbitrary [2D kinematics][projectile-motion] problems interactively.
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
* [whales.life] (Spring 2019, [Harvey Mudd College][hmc], CS 121:
  Software Development; [source](whales.life-source)): Simple webapp
  for playing [chess] against an AI using [minimax] and [neural
  networks]. *Teammates: [Ben Baral][ben], [Max Treutelaar][max],
  [Miles President][miles], [Shannon Collier][shannon].*
* [heroku-buildpack-git-lfs] (Spring 2019, [Harvey Mudd College][hmc],
  CS 121: Software Development): [Heroku] buildpack to install [Git
  LFS] and download assets transparently during build.
* [Webapps Done Right][wdr] (Spring 2019, [Harvey Mudd College][hmc],
  CS 121: Software Development; [slides][wdr-slides] and
  [source][wdr-source]): Guest lecture I gave to my class on webapp
  development using [Python], [Pipenv], [Flask], [Heroku].
* [Lossless Path MTU Discovery][clinic-frag] (Fall 2019 -- Spring
  2020, [Harvey Mudd College][hmc], [CS Clinic][clinic];
  [slides][clinic-slides] and [Internet-Draft][clinic-frag-id]):
  Implementation in the [Linux kernel][kernel] of a replacement for
  [Path MTU Discovery][pmtud] with improved performance and
  robustness. *Teammates: [Bradley Newton][bradley], [Hakan
  Alpan][hakan], [Miles President][miles].*
* [IPv6 Routing Extension Header Benchmarking][clinic-bench] (Spring
  2020, [Harvey Mudd College][hmc], [CS Clinic][clinic];
  [slides][clinic-slides] and [Internet-Draft][clinic-bench-id]):
  Systematic procedure for comparing the performance of IPv6 routing
  [extension headers][exthdr] including [Routing Header Type 0][rh0],
  [Segment Routing Header][srh], and [Compressed Routing Header][crh].
  *Teammates: [Bradley Newton][bradley], [Hakan Alpan][hakan], [Miles
  President][miles].*
* [Life After Mudd][lam] (Winter 2019 -- Spring 2020, [Harvey Mudd
  College][hmc], CS 189: Programming Practicum; [source](lam-source)):
  Geographic visualization webapp for results of a survey on
  post-graduation plans for the Class of 2020. *Current maintainer:
  [Kye Shi][kye].*

## Deprecated projects

* [CAS] (Summer 2014): Failed attempt to create a [computer algebra
  system], like [Mathematica].
* [minimal-webapp] (Summer 2016): Noble effort to create a
  [ClojureScript] webapp that did not require a huge number of
  incomprehensible build system configuration files that nobody quite
  understood. It almost worked.
* [acc] (Summer 2017 -- Summer 2018): Command-line accounting tool
  with first-class support for reconciling multiple ledgers
  interactively. This project was abandoned when it was pointed out to
  me by a friend that I didn't actually have to track every single one
  of my financial transactions.
* [etunes] (Fall 2017 -- Summer 2018): [Declarative],
  [version-controlled][version control] music library manager for
  [Emacs]. Attempt #1 at a personal music library manager.
* [fstunes] (Winter 2018): Extremely minimal music library manager
  leveraging [UNIX filesystem] abstractions. Attempt #2 at a personal
  music library manager.

## Abandoned and on-hiatus projects

* [MazeGen Neue] (Summer 2016): An attempt to rewrite [MazeGen] to be
  slightly less of a mess. Unfortunately, I went much too far in the
  opposite direction and created some [Enterprise FizzBuzz], and the
  project was abandoned.
* [pset] (Fall 2017): Configurable templating system for university
  problem sets typeset in LaTeX.
* [Ishikk] (Summer 2018): Read-write [Google Calendar] interface for
  Emacs, with graphical week view.
* [Tabcrush] (Summer 2019): High-performance power tool for editing
  large-scale tabular data in [Emacs], intended for use with µTunes.
* [Mercury] (Summer -- Fall 2019): [Emacs] interface to [Facebook
  Messenger], [Signal], and SMS (via [Google Hangouts][hangouts])
* [Dumbparens] (Spring 2020): Sane delimiter-matching package for
  [Emacs] with primitives based on [syntax tables], replacing
  [Smartparens], [Paredit], and [Electric Pair
  mode][electric-pair-mode].

[acc]: https://github.com/raxod502/acc
[alpine snowboards]: https://www.sgsnowboards.com/
[apheleia]: https://github.com/raxod502/apheleia
[ben]: https://www.linkedin.com/in/ben-baral/
[bhs]: https://boh.bvsd.org/Pages/default.aspx
[blackout]: https://github.com/raxod502/blackout
[bradley]: https://www.linkedin.com/in/bnew10/
[brogue]: https://sites.google.com/site/broguegame/
[cas]: https://github.com/raxod502/CAS
[cf]: https://en.wikipedia.org/wiki/Collaborative_filtering
[charles]: https://www.linkedin.com/in/charles-gruenwald-phd-150ba13
[chess]: https://en.wikipedia.org/wiki/Chess
[christmas rogue]: https://github.com/raxod502/ChristmasRogue
[chrome-ext]: https://developer.chrome.com/extensions
[chrono count]: https://github.com/raxod502/chrono-count
[cie-source]: https://github.com/raxod502/intuitive-explanations/blob/master/_src/tex/documents/CalculusIntuitiveExplanations/CalculusIntuitiveExplanations.tex
[cie]: /math/calculus-intuitive-explanations
[claremont colleges]: http://www.claremont.edu/
[clemera]: https://github.com/clemera
[clinic-bench-id]: https://github.com/raxod502/juniper-tools/blob/master/benchmarking/draft/final.pdf
[clinic-bench]: https://github.com/raxod502/juniper-tools/tree/master/benchmarking
[clinic-frag-id]: https://tools.ietf.org/html/draft-bonica-intarea-lossless-pmtud-01
[clinic-frag]: https://github.com/raxod502/juniper-tools/tree/master/fragmentation
[clinic-slides]: https://docs.google.com/presentation/d/1EES7E0OFQy24dXvpHuuqUpKei186B7zW8glRP0tqRLw/edit?usp=sharing
[clinic]: https://www.cs.hmc.edu/clinic/
[clojure]: https://clojure.org/
[clojurescript]: https://clojurescript.org/
[computer algebra system]: https://en.wikipedia.org/wiki/Computer_algebra_system
[conway]: https://github.com/raxod502/conway
[cortex.optimise]: https://github.com/raxod502/cortex/tree/master/examples/optimise
[crh]: https://tools.ietf.org/html/draft-bonica-6man-comp-rtg-hdr-22
[cstdlib]: https://en.wikipedia.org/wiki/C_standard_library
[ctrlf]: https://github.com/raxod502/ctrlf
[datomic]: https://www.datomic.com/
[declarative]: https://en.wikipedia.org/wiki/Declarative_programming
[delight.el]: https://elpa.gnu.org/packages/delight.html
[dess-source]: https://github.com/raxod502/intuitive-explanations/blob/master/_src/tex/documents/DifferentialEquationSolutionStrategies/DifferentialEquationSolutionStrategies.tex
[dess]: /math/differential-equation-solution-strategies
[dfas]: https://en.wikipedia.org/wiki/Deterministic_finite_automaton
[diary-manager]: https://github.com/raxod502/diary-manager
[differential equations]: https://en.wikipedia.org/wiki/Differential_equation
[dim.el]: https://github.com/alezost/dim.el
[diminish.el]: https://github.com/myrjola/diminish.el
[document class]: https://en.wikibooks.org/wiki/LaTeX/Document_Structure#Document_classes
[dumbparens]: https://github.com/raxod502/dumbparens
[dynamic programming]: https://en.wikipedia.org/wiki/Dynamic_programming
[ecofasten]: https://ecofastensolar.com/
[el-patch]: https://github.com/raxod502/el-patch
[electric-pair-mode]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Matching.html
[elf]: https://en.wikipedia.org/wiki/Executable_and_Linkable_Format
[elisp]: https://en.wikipedia.org/wiki/Emacs_Lisp
[emacs]: https://www.gnu.org/software/emacs/
[emacsmirror]: https://emacsmirror.net/
[empty]: https://github.com/raxod502/empty
[enterprise fizzbuzz]: https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition
[etunes]: https://github.com/raxod502/etunes
[exthdr]: https://en.wikipedia.org/wiki/IPv6_packet#Extension_headers
[facebook messenger]: https://www.messenger.com/
[flask]: https://flask.palletsprojects.com/en/1.1.x/
[fstunes]: https://github.com/raxod502/fstunes
[geb]: https://github.com/raxod502/github-email-backlog
[gimp]: https://www.gimp.org/
[git lfs]: https://git-lfs.github.com/
[git]: https://git-scm.com/
[github-notifications]: https://developer.github.com/v3/activity/notifications/
[github]: https://github.com/raxod502
[gnu-elpa-mirror]: https://github.com/raxod502/gnu-elpa-mirror
[gnu-elpa]: https://elpa.gnu.org/
[gnu]: https://www.gnu.org/home.en.html
[google calendar]: https://calendar.google.com/
[gradient descent]: https://en.wikipedia.org/wiki/Gradient_descent
[gravity]: https://github.com/raxod502/Gravity
[hakan]: https://www.linkedin.com/in/hakan-alpan-15189615b/
[hangman2232]: https://github.com/raxod502/Hangman2232
[hangman]: https://en.wikipedia.org/wiki/Hangman_(game)
[hangouts]: https://hangouts.google.com/
[haskell]: https://www.haskell.org/
[helm]: https://github.com/emacs-helm/helm
[heroku-buildpack-emacs]: https://github.com/raxod502/heroku-buildpack-emacs
[heroku-buildpack-git-lfs]: https://github.com/raxod502/heroku-buildpack-git-lfs
[heroku]: https://www.heroku.com/
[hmc]: https://www.hmc.edu/
[hyperschedule-source]: https://github.com/MuddCreates/hyperschedule
[hyperschedule]: https://hyperschedule.io
[ie]: https://github.com/raxod502/intuitive-explanations
[ios]: https://www.apple.com/ios/
[isearch]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Incremental-Search.html
[ishikk]: https://github.com/raxod502/ishikk
[ivy]: https://github.com/abo-abo/swiper#ivy
[java]: https://www.java.com/
[jekyll]: https://jekyllrb.com/
[jflap autograder]: https://github.com/raxod502/HMC-Grader/blob/master/app/plugins/autograder/newjflapgrader.py
[jflap]: http://www.jflap.org/
[kalyn]: https://github.com/raxod502/kalyn
[kalyn-post]: https://intuitiveexplanations.com/tech/kalyn
[kenken]: https://en.wikipedia.org/wiki/KenKen
[keren]: https://www.linkedin.com/in/keren-megory
[kernel]: https://en.wikipedia.org/wiki/Linux_kernel
[kye]: https://github.com/kwshi
[lam-source]: https://github.com/MuddCreates/life-after-mudd
[lam]: https://life-after-mudd.herokuapp.com/
[lass-source]: https://github.com/raxod502/intuitive-explanations/blob/master/_src/tex/documents/LinearAlgebraSummarySheet/LinearAlgebraSummarySheet.tex
[lass]: /math/linear-algebra-summary-sheet
[latex]: https://www.latex-project.org/
[layerize-inspiration]: https://github.com/raxod502/layerize/blob/f9d598b5d15c47045729505cc1b7a3d3e077bb11/Inspiration.pdf
[layerize]: https://github.com/raxod502/layerize
[lazy-map]: https://github.com/raxod502/lazy-map
[leiningen]: https://leiningen.org/
[linear algebra]: https://en.wikipedia.org/wiki/Linear_algebra
[linker]: https://en.wikipedia.org/wiki/Linker_(computing)
[lisp]: https://en.wikipedia.org/wiki/Lisp_(programming_language)
[madeline]: https://github.com/raxod502/madeline
[make]: https://www.gnu.org/software/make/
[map]: https://en.wikipedia.org/wiki/Associative_array
[mathematica]: https://www.wolfram.com/mathematica/
[max]: https://www.linkedin.com/in/max-treutelaar/
[mazegen neue]: https://github.com/raxod502/MazeGenNeue
[mazegen]: https://github.com/raxod502/MazeGen
[mercury]: https://github.com/raxod502/mercury
[miles]: https://www.linkedin.com/in/miles-president-4b5394149/
[minimal-webapp]: https://github.com/raxod502/minimal-webapp
[minimax]: https://en.wikipedia.org/wiki/Minimax
[mla-tex]: https://github.com/raxod502/mla-tex
[mla]: https://owl.english.purdue.edu/owl/resource/747/24/
[n-body]: https://en.wikipedia.org/wiki/N-body_simulation
[netlify]: https://www.netlify.com/
[neural networks]: https://en.wikipedia.org/wiki/Artificial_neural_network
[nfas]: https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton
[node.js]: https://nodejs.org/en/
[paredit]: http://danmidwood.com/content/2014/11/21/animated-paredit.html
[pipenv]: https://pipenv.pypa.io/en/latest/
[pm]: https://en.wikipedia.org/wiki/Package_manager
[pmtud]: https://en.wikipedia.org/wiki/Path_MTU_Discovery
[prescient.el]: https://github.com/raxod502/prescient.el
[projectile simulator]: https://github.com/raxod502/ProjectileSimulator
[projectile-motion]: https://en.wikipedia.org/wiki/Projectile_motion
[pset]: https://github.com/raxod502/pset
[puzzles]: https://github.com/raxod502/puzzles
[python]: https://www.python.org/
[quantcast]: https://www.quantcast.com/
[radian]: https://github.com/raxod502/radian
[rcs patches]: https://tools.ietf.org/doc/tcllib/html/rcs.html#section4
[repl.it]: https://repl.it/
[rh0]: https://tools.ietf.org/html/rfc2460#section-4.4
[roguelike]: https://en.wikipedia.org/wiki/Roguelike
[ruby]: https://www.ruby-lang.org/en/
[sat]: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
[science-fair]: https://github.com/raxod502/ScienceFair
[selectrum]: https://github.com/raxod502/selectrum
[sg-puzzles]: http://mathworld.wolfram.com/Slothouber-GraatsmaPuzzle.html
[shannon]: https://www.linkedin.com/in/shannon-collier-631392149/
[signal]: https://signal.org/
[smarter-playlist]: https://github.com/raxod502/smarter-playlist
[smartparens]: https://github.com/Fuco1/smartparens
[srh]: https://tools.ietf.org/html/rfc8754
[straight.el]: https://github.com/raxod502/straight.el
[sudoku]: https://en.wikipedia.org/wiki/Sudoku
[summit]: https://sum.bvsd.org/Pages/default.aspx
[swiper]: https://github.com/abo-abo/swiper#swiper
[syntax tables]: https://www.gnu.org/software/emacs/manual/html_node/elisp/Syntax-Tables.html
[tabcrush]: https://github.com/raxod502/tabcrush
[tc-hn]: https://news.ycombinator.com/item?id=15460851
[terraria]: https://terraria.org/
[terrariaclone]: https://github.com/raxod502/TerrariaClone
[ti-84-programs]: https://github.com/raxod502/TI84
[ti-84]: https://en.wikipedia.org/wiki/TI-84_Plus_series#TI-84_Plus_Silver_Edition
[tidier]: https://github.com/raxod502/tidier
[tikz]: https://en.wikipedia.org/wiki/PGF/TikZ
[tkinter]: https://docs.python.org/3/library/tkinter.html
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
[wdr-slides]: https://docs.google.com/presentation/d/1NTf-VUhs0jjtqVeny3gmdrZZ03Rbv8ZDsLrWiBvHYLk/edit?usp=sharing
[wdr-source]: https://github.com/raxod502/cs121-hello
[wdr]: https://drive.google.com/open?id=1J0dQjrrh7Wiio5HlGAtkPKbn5C7GWhG2
[wdx]: https://github.com/raxod502/wdx
[whales.life-source]: https://github.com/raxod502/cs121-whales
[whales.life]: https://cs121-whales.herokuapp.com/
[x86-64]: https://en.wikipedia.org/wiki/X86-64
[zsh]: http://www.zsh.org/
