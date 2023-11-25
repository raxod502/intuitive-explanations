---
title: "Projects"
---

This page lists some of my personal, work, and school projects. You
can find the source code for (almost) all of these projects and more
on my [personal GitHub account][github] and the [Radian LLC GitHub
organization][radian-github].

All of my open-source projects receive continued maintenance when
needed, except where otherwise noted. The dates below, however, show
when most of the major development happened.

Note that most of these projects are owned and operated by [Radian
LLC], who will be the liable party in the case of legal disputes. A
subset are my personal work instead. When in doubt, check the license
notice in the relevant GitHub repository. Obviously, work projects are
the property and liability of the relevant employer(s), and the same
applies to some school projects.

## Currently working on

* regex-accountant: Aggregating personal finance record-keeper based
  on total control of transaction reconciliation and categorization
  via interactive rules engine and standard interface for ingesting
  data from reverse engineered APIs.

## Emacs projects

* [Radian] (Summer 2016 -- Present): Elegant but practical
  configurations for [Emacs], [Zsh], [Tmux], and [Git].
* [`el-patch`][el-patch] (Winter 2016 -- Fall 2018): [Emacs] package
  for future-proofing Emacs Lisp customizations.
* [`straight.el`][straight.el] (Winter 2016 -- Present):
  Next-generation, purely functional package manager for the [Emacs]
  hacker. *Co-maintainer: [Nicholas Vollmer][progfolio].*
* [diary-manager] (Spring 2017 -- Summer 2018): Command-line tool and
  [Emacs] package for managing daily (encrypted, version-controlled)
  diary entries.
* [elint] (Summer -- Fall 2017): An attempt at deduplicating various
  [CI] utilities for my [Emacs] packages. It didn't provide enough
  value to justify the overhead, although there are other projects
  which provide the same functionality in a more powerful manner.
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
* [Apheleia] (Summer 2019): Run code formatters on [Emacs] buffer
  contents without moving the cursor position, using [RCS patches] and
  [dynamic programming].
* [Selectrum] (Fall 2019 -- Spring 2020): Completion and incremental
  narrowing framework for [Emacs], replacing [Ivy] and [Helm].
  *Co-maintainer: [Clemens Radermacher][clemera].*
* [CTRLF] (Winter 2019 -- Spring 2020): Better single-buffer text
  search interface for [Emacs], replacing [Isearch] and [Swiper].

## Reverse engineering and web automation

* [Messenger Mirror][mm] (Fall 2021): Small [Python] application using
  [Selenium] to bypass Facebook Messenger's anti-bot protections and
  allow message notifications to be automatically forwarded to email.
  Part of my initiative to stop using the products of companies I
  despise. This was eventually blocked by Facebook.
* [Unzuckify] (Winter 2021): Small [Python] application using
  [reverse-engineered][rev-eng] [Facebook] login and
  [GraphQL](https://graphql.org/) APIs to exfiltrate message
  notifications and forward them to email. Replaces [Messenger
  Mirror][mm] after Facebook blocked it. This project was blocked too,
  so I just fully deprecated Messenger ahead of schedule.
* [Claremont Spam Disabler] (Summer 2022): Tiny [Google Apps
  Script][gas] project that automatically filters and processes spammy
  emails sent to students by the [Claremont Colleges].
* [Venmo Auto Transfer] (Summer 2022): Small [Python] application
  using [reverse-engineered][rev-eng] [Venmo] API to automatically
  transfer Venmo balance to linked bank account.
* [Squeaky Hinge] (Fall 2022): Small [Python] application using
  [reverse-engineered][rev-eng] [Hinge] API to send more reliable
  notifications on inbox messages.

## Web apps and services, browser extensions

* [Tidier] (Spring 2019): Small application to auto-close abandoned
  GitHub issues by label and activity.
* [Hyperschedule] (Fall 2017 -- Fall 2019;
  [source][hyperschedule-source]): Fast and powerful course scheduler
  for the [Claremont Colleges]. *Current maintainer: [Kye Shi][kye].*
* [GitHub Email Backlog][geb] (Summer 2020): Simple [Chrome
  extension][chrome-ext] which abuses the [GitHub notifications
  API][github-notifications] to automatically update my profile status
  with an estimate of how long you will wait for a response when you
  report an issue. This is deprecated since I have gotten my personal
  life in order and can provide a more reliable base response time.
* [Python in a Box][pib] (Summer 2021; [source][pib-source]):
  Interactive online Python REPL in 30 lines of JavaScript.

## Technical utilities

* [smarter-playlist] (Fall 2016): [Clojure] application to generate
  iTunes playlists combining variety, cohesiveness, and novelty.
* [wdx] (Fall 2017): Simpler and more robust alternative to [wd],
  written in [Python].
* [mood-tracker] (Spring 2017): Small [AppleScript] utility to record
  data about personal mood at regular intervals. This project was
  abandoned when I realized that trying to systematize everything in
  my life was actually not making me happier.
* [Madeline] (Summer 2018): Novel approach to directory syncing, used
  to maintain complementary mirroring of two filesystem trees via SSH.
  This idea, while interesting, never served my use case terribly well
  in the end, and the implementation is terrible. I now use a smaller
  and better-targeted personal script to serve a similar function.
* [pass-ln] (Fall 2022): [Pass] extension for creating [symbolic
  links][symlinks].
* [Sleeping Beauty] (Winter 2022): Network utility that puts a
  stateless TCP web server to sleep when not receiving traffic, to
  minimize resource utilization.

## Research and education

* [Kalyn] (Spring 2020; [blog post][kalyn-post]): Compile a high-level
  functional programming language, inspired by [Haskell] but with
  [Lisp] syntax, all the way to [ELF] binaries targeting [x86-64]
  without using any pre-existing components such as the [GNU][]
  [linker] or [C standard library][cstdlib].

## Games

* [TerrariaClone] (Spring 2011 -- Spring 2013; [HackerNews
  thread][tc-hn]): My first major project, a clone of [Terraria],
  preserved as an example of how terrible code can be if you don't pay
  attention to its quality.
* [Mother's Day][mothers-day-2013] (Summer 2013): Small [Java] applet
  that I made for Mother's Day.
* [Watching Paint Dry: The Game][watching paint dry] (Summer 2013):
  Small [Java] applet where you can paint things with the mouse, and
  then watch the paint dry. Yes, really. For Father's Day.
* [tetris-processing] (Winter 2013): Simple clone of [Tetris] from
  high school, this one in [Processing] and featuring music.
* [funwithframes] (Winter 2013): Simple game in [Processing] where you
  try to dodge certain squares while being distracted by other
  squares.
* [2048] (Spring -- Summer 2014): Simple clone of the game
  [2048][2048-game], implemented in [Java] with graphical and
  command-line interfaces as well as a few auto-solving algorithms.
* [tetris-python] (Summer 2014): Slightly more advanced clone of
  [Tetris] from high school, this one in [Python] and featuring
  pentominoes and other nonstandard pieces.
* [Christmas Rogue] (Winter 2014): Christmas present for my father.
  [Roguelike] game inspired by [Brogue] and implemented in [Java].
  Likely the most over-the-top Christmas present I will ever give.

## Mobile apps

* [Chrono Count] (Summer 2013 -- Spring 2014): [iOS] app to manage
  countdowns and countups under arbitrarily complex schedules,
  previously available from the iOS App Store.
* [Gravity] (Winter 2013): Christmas present for my father. [iOS] app
  that simulates [many-body Newtonian gravity][n-body].

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
  website built on [GitHub Actions][gha] using [Make], [Eleventy],
  [LaTeX], and hosted on [Netlify].
* [mla-tex] (Spring 2017 -- Fall 2018): [LaTeX][latex] [document
  class] for typesetting papers to [MLA] formatting standards.
* [example-website] (Summer 2020): Simple template to set up a [static
  site] similar to my personal website, for my friends who were
  interested in making similar websites for themselves.

## Pure miscellany

* [TI-84 programs][ti-84-programs] (Spring 2010 -- Spring 2016): My
  first programming ever, on the [TI-84 Plus Silver Edition][ti-84] in
  middle and high school.
* [puzzles] (Summer 2016): Solvers for [KenKen] and [Sudoku] puzzles in
  [Clojure].
* [empty] (Summer 2016): Absolute bare minimum [Leiningen] template.
* [conway] (Fall 2016): A simple solver for generalized
  [Slothouber-Graatsma \(Conway\) puzzles][sg-puzzles] in [Clojure].

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

* [Science fair project][science-fair] (Fall 2011 -- Spring 2012,
  [Summit Middle School][summit]): [Boolean satisfiability
  solver][sat] applied to [Sudoku] solving.
* [Hangman 2 2 3 2][hangman2232] (Spring 2013, [Boulder High
  School][bhs], Advanced C++): Class project. [iOS] app that plays
  [hangman] or, depending on usage, the stock market.
* [Projectile Simulator] (Fall 2013, [Boulder High School][bhs], AP
  Physics C): Class project. Hacky [Python] GUI in [Tkinter] to solve
  arbitrary [2D kinematics][projectile-motion] problems interactively.
* [MathViewers] (Summer -- Winter 2014): Various programming projects
  for math classes: [generative art], [complex arithmetic][complex
  numbers] visualization, numerical solution of [differential
  equations].
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
  Software Development; [source][whales.life-source]): Simple webapp
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
  College][hmc], CS 189: Programming Practicum; [source][lam-source]):
  Geographic visualization webapp for results of a survey on
  post-graduation plans for the Class of 2020. *Current maintainer:
  [Kye Shi][kye].*

## Abandoned projects (will never be finished)

* [space-grid] (Spring 2012): An attempt at a clone of the Flash game
  [Star Relic] in [Python]. It didn't get very far, because I didn't
  actually know any game programming.
* [CAS] (Summer 2014): Failed attempt to create a [computer algebra
  system], like [Mathematica].
* [dfa] (Spring 2016): A quickly-abandoned attempt to use [Clojure] to
  generate [DFAs] using a [genetic algorithm].
* [MazeGen Neue] (Summer 2016): An attempt to rewrite [MazeGen] to be
  slightly less of a mess. Unfortunately, I went much too far in the
  opposite direction and created some [Enterprise FizzBuzz], and the
  project was abandoned.
* [minimal-webapp] (Summer 2016): Noble effort to create a
  [ClojureScript] webapp that did not require a huge number of
  incomprehensible build system configuration files that nobody quite
  understood. It almost worked.
* [acc] (Summer 2017 -- Summer 2018): Command-line accounting tool
  with first-class support for reconciling multiple ledgers
  interactively. This project was abandoned when it was pointed out to
  me by a friend that I didn't actually have to track every single one
  of my financial transactions. I used a manual spreadsheet (reviewed
  quarterly) for budgeting and cash flow analysis for some time, and
  am considering migrating to [Lunch Money] moving forward.
* [Dotman] (Summer 2017 -- Summer 2018): A very silly idea I had to
  write a unified package manager (with [Ruby] DSL) for my entire
  system configuration (e.g. software installation, configuration,
  dotfiles, misc scripts, etc.). This was abandoned when I realized I
  could just manually write down what I did to configure my laptop. If
  you actually want declarative system configuration, you should
  probably be using [Nix].
* [etunes] (Fall 2017 -- Summer 2018): [Declarative],
  [version-controlled][version control] music library manager for
  [Emacs]. Attempt #1 at a personal music library manager. Replaced by
  [fstunes].
* [pset] (Fall 2017): Configurable templating system for university
  problem sets typeset in LaTeX. Will never be finished because I am
  no longer a college student.
* [fstunes] (Winter 2018): Extremely minimal music library manager
  leveraging [UNIX filesystem] abstractions. Attempt #2 at a personal
  music library manager. Replaced by [µTunes][utunes].
* [µTunes][utunes] (Spring -- Winter 2019): Aggressively minimal
  command-line music player and library manager following the [UNIX
  philosophy], with [Emacs] interface. Attempt #3 at a personal music
  library manager. Was supposed to be replaced by [Pyrelight] but is
  still in current use despite being considered deprecated.
* [Tabcrush] (Summer 2019): High-performance power tool for editing
  large-scale tabular data in [Emacs], intended for use with
  [µTunes][utunes]. Deprecated alongside µTunes.
* [Mercury] (Summer -- Fall 2019): [Emacs] interface to [Facebook
  Messenger], [Signal], and SMS (via [Google Hangouts][hangouts]).
  This has been superseded by [Matrix] for me.
* [Pyrelight] (Spring -- Summer 2020): More sophisticated command-line
  music player and library manager. Attempt #4 at a personal music
  library manager. Will be replaced by Shallan.

## On-hiatus projects (might be finished someday)

* [Ishikk] (Summer 2018): Read-write [Google Calendar] interface for
  Emacs, with graphical week view. If finished, this would be
  repurposed to work with [Fastmail]. However, the 2023 package
  [calfw-blocks] might supersede the project.
* [Dumbparens] (Spring 2020): Sane delimiter-matching package for
  [Emacs] with primitives based on [syntax tables], replacing
  [Smartparens], [Paredit], and [Electric Pair
  mode][electric-pair-mode]. This is still relevant but bandwidth has
  not been available to drive the project to completion.
* [Riju] (Summer 2020 -- Winter 2021; [source][riju-source]):
  Extremely fast online playground for every programming language.
  Currently working on port to [Kubernetes] to improve
  maintainability.
* Shallan (Spring -- Summer 2021; not yet published): Personal music
  library player combining the user-friendly interface and
  cross-device synchronization of [YouTube Music][ytm] with the
  flexibility and ownership of a self-hosted open-source solution.
  Attempt #5 at a personal music library manager.
* [Hypercast] (Winter 2022): Free, no-hassle watch parties on every
  streaming platform. Implemented as Chrome and Firefox extension.
* dontbeevilmirror (Spring 2023): Anonymizing proxy [CDN] for
  [Android] apps pulled from the [Google Play Store]

[2048-game]: https://play2048.co/
[2048]: https://github.com/radian-software/2048
[acc]: https://github.com/raxod502/acc
[alpine snowboards]: https://www.sgsnowboards.com/
[android]: https://en.wikipedia.org/wiki/Android_(operating_system)
[apheleia]: https://github.com/radian-software/apheleia
[applescript]: https://en.wikipedia.org/wiki/AppleScript
[ben]: https://www.linkedin.com/in/ben-baral/
[bhs]: https://boh.bvsd.org/
[blackout]: https://github.com/radian-software/blackout
[bradley]: https://www.linkedin.com/in/bnew10/
[brogue]: https://sites.google.com/site/broguegame/
[c++]: https://en.wikipedia.org/wiki/C%2B%2B
[calfw-blocks]: https://github.com/ml729/calfw-blocks
[cas]: https://github.com/raxod502/CAS
[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network
[cf]: https://en.wikipedia.org/wiki/Collaborative_filtering
[charles]: https://www.linkedin.com/in/charles-gruenwald-phd-150ba13
[chess]: https://en.wikipedia.org/wiki/Chess
[christmas rogue]: https://github.com/radian-software/ChristmasRogue
[chrome-ext]: https://developer.chrome.com/extensions
[chrono count]: https://github.com/radian-software/chrono-count
[ci]: https://en.wikipedia.org/wiki/Continuous_integration
[cie-source]: https://github.com/raxod502/intuitive-explanations/blob/main/doc/tex/documents/CalculusIntuitiveExplanations/CalculusIntuitiveExplanations.tex
[cie]: /math/calculus-intuitive-explanations
[circleci]: https://circleci.com/
[claremont colleges]: http://www.claremont.edu/
[claremont spam disabler]: https://github.com/radian-software/claremont-spam-disabler
[clemera]: https://github.com/clemera
[clinic-bench-id]: https://github.com/raxod502/juniper-tools/blob/master/benchmarking/draft/final.pdf
[clinic-bench]: https://github.com/raxod502/juniper-tools/tree/master/benchmarking
[clinic-frag-id]: https://tools.ietf.org/html/draft-bonica-intarea-lossless-pmtud-01
[clinic-frag]: https://github.com/raxod502/juniper-tools/tree/master/fragmentation
[clinic-slides]: https://nextcloud.intuitiveexplanations.com/s/M9DAew6BWR7z5Q8
[clinic]: https://www.cs.hmc.edu/clinic/
[clojure]: https://clojure.org/
[clojurescript]: https://clojurescript.org/
[complex numbers]: https://en.wikipedia.org/wiki/Complex_number
[computer algebra system]: https://en.wikipedia.org/wiki/Computer_algebra_system
[conway]: https://github.com/raxod502/conway
[cortex.optimise]: https://github.com/raxod502/cortex/tree/master/examples/optimise
[crh]: https://tools.ietf.org/html/draft-bonica-6man-comp-rtg-hdr-22
[cstdlib]: https://en.wikipedia.org/wiki/C_standard_library
[ctrlf]: https://github.com/radian-software/ctrlf
[datomic]: https://www.datomic.com/
[declarative]: https://en.wikipedia.org/wiki/Declarative_programming
[delight.el]: https://elpa.gnu.org/packages/delight.html
[dess-source]: https://github.com/raxod502/intuitive-explanations/blob/main/doc/tex/documents/DifferentialEquationSolutionStrategies/DifferentialEquationSolutionStrategies.tex
[dess]: /math/differential-equation-solution-strategies
[dfa]: https://github.com/raxod502/dfa
[dfas]: https://en.wikipedia.org/wiki/Deterministic_finite_automaton
[diary-manager]: https://github.com/radian-software/diary-manager
[differential equations]: https://en.wikipedia.org/wiki/Differential_equation
[dim.el]: https://github.com/alezost/dim.el
[diminish.el]: https://github.com/myrjola/diminish.el
[document class]: https://en.wikibooks.org/wiki/LaTeX/Document_Structure#Document_classes
[dotman]: https://github.com/raxod502/dotman/tree/e0ee7c8ba99477fd8c554a0757449b1ed6179fa4
[dumbparens]: https://github.com/radian-software/dumbparens
[dynamic programming]: https://en.wikipedia.org/wiki/Dynamic_programming
[ecofasten]: https://ecofastensolar.com/
[el-patch]: https://github.com/radian-software/el-patch
[electric-pair-mode]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Matching.html
[eleventy]: https://11ty.dev/
[elf]: https://en.wikipedia.org/wiki/Executable_and_Linkable_Format
[elint]: https://github.com/radian-software/elint
[elisp]: https://en.wikipedia.org/wiki/Emacs_Lisp
[emacs]: https://www.gnu.org/software/emacs/
[emacsmirror]: https://emacsmirror.net/
[empty]: https://github.com/radian-software/empty
[enterprise fizzbuzz]: https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition
[etunes]: https://github.com/radian-software/etunes
[example-website]: https://github.com/raxod502/example-website
[exthdr]: https://en.wikipedia.org/wiki/IPv6_packet#Extension_headers
[facebook messenger]: https://www.messenger.com/
[facebook]: https://www.facebook.com/
[fastmail]: https://www.fastmail.com/
[flask]: https://flask.palletsprojects.com/en/1.1.x/
[fstunes]: https://github.com/radian-software/fstunes
[funwithframes]: https://github.com/raxod502/funwithframes
[gas]: https://developers.google.com/apps-script
[geb]: https://github.com/radian-software/github-email-backlog
[generative art]: https://en.wikipedia.org/wiki/Generative_art
[genetic algorithm]: https://en.wikipedia.org/wiki/Genetic_algorithm
[gha]: https://github.com/features/actions
[git lfs]: https://git-lfs.github.com/
[git]: https://git-scm.com/
[github-notifications]: https://developer.github.com/v3/activity/notifications/
[github]: https://github.com/raxod502
[gnu-elpa-mirror]: https://github.com/radian-software/gnu-elpa-mirror
[gnu-elpa]: https://elpa.gnu.org/
[gnu]: https://www.gnu.org/home.en.html
[google calendar]: https://calendar.google.com/
[google play store]: https://en.wikipedia.org/wiki/Google_Play
[gradient descent]: https://en.wikipedia.org/wiki/Gradient_descent
[graphql]: https://graphql.org/
[gravity]: https://github.com/radian-software/Gravity
[hakan]: https://www.linkedin.com/in/hakan-alpan-15189615b/
[hangman2232]: https://github.com/radian-software/Hangman2232
[hangman]: https://en.wikipedia.org/wiki/Hangman_(game)
[hangouts]: https://hangouts.google.com/
[haskell]: https://www.haskell.org/
[helm]: https://github.com/emacs-helm/helm
[heroku-buildpack-emacs]: https://github.com/radian-software/heroku-buildpack-emacs
[heroku-buildpack-git-lfs]: https://github.com/radian-software/heroku-buildpack-git-lfs
[heroku]: https://www.heroku.com/
[hinge]: https://hinge.co/
[hmc]: https://www.hmc.edu/
[hypercast]: https://github.com/radian-software/hypercast
[hyperschedule-source]: https://github.com/MuddCreates/hyperschedule
[hyperschedule]: https://hyperschedule.io
[ie]: https://github.com/raxod502/intuitive-explanations
[ios]: https://www.apple.com/ios/
[isearch]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Incremental-Search.html
[ishikk]: https://github.com/radian-software/ishikk
[ivy]: https://github.com/abo-abo/swiper#ivy
[java]: https://www.java.com/
[jflap autograder]: https://github.com/raxod502/HMC-Grader/blob/master/app/plugins/autograder/newjflapgrader.py
[jflap]: http://www.jflap.org/
[kalyn-post]: https://intuitiveexplanations.com/tech/kalyn
[kalyn]: https://github.com/radian-software/kalyn
[kenken]: https://en.wikipedia.org/wiki/KenKen
[keren]: https://www.linkedin.com/in/keren-megory
[kernel]: https://en.wikipedia.org/wiki/Linux_kernel
[kubernetes]: https://kubernetes.io/
[kye]: https://github.com/kwshi
[lam-source]: https://github.com/MuddCreates/life-after-mudd
[lam]: https://life-after-mudd.herokuapp.com/
[lass-source]: https://github.com/raxod502/intuitive-explanations/blob/main/doc/tex/documents/LinearAlgebraSummarySheet/LinearAlgebraSummarySheet.tex
[lass]: /math/linear-algebra-summary-sheet
[latex]: https://www.latex-project.org/
[layerize-inspiration]: https://github.com/radian-software/layerize/blob/f9d598b5d15c47045729505cc1b7a3d3e077bb11/Inspiration.pdf
[layerize]: https://github.com/radian-software/layerize
[lazy-map]: https://github.com/raxod502/lazy-map
[leiningen]: https://leiningen.org/
[linear algebra]: https://en.wikipedia.org/wiki/Linear_algebra
[linker]: https://en.wikipedia.org/wiki/Linker_(computing)
[lisp]: https://en.wikipedia.org/wiki/Lisp_(programming_language)
[lunch money]: https://lunchmoney.app/
[madeline]: https://github.com/radian-software/madeline
[make]: https://www.gnu.org/software/make/
[map]: https://en.wikipedia.org/wiki/Associative_array
[mathematica]: https://www.wolfram.com/mathematica/
[mathviewers]: https://github.com/raxod502/MathViewers
[matrix]: https://matrix.org/
[max]: https://www.linkedin.com/in/max-treutelaar/
[mazegen neue]: https://github.com/radian-software/MazeGenNeue
[mazegen]: https://github.com/radian-software/MazeGen
[mercury]: https://github.com/radian-software/mercury
[miles]: https://www.linkedin.com/in/miles-president-4b5394149/
[minimal-webapp]: https://github.com/raxod502/minimal-webapp
[minimax]: https://en.wikipedia.org/wiki/Minimax
[mla-tex]: https://github.com/radian-software/mla-tex
[mla]: https://owl.english.purdue.edu/owl/resource/747/24/
[mm]: https://github.com/radian-software/messenger-mirror
[mood-tracker]: https://github.com/raxod502/mood-tracker
[mothers-day-2013]: https://github.com/raxod502/mothers-day-2013
[n-body]: https://en.wikipedia.org/wiki/N-body_simulation
[netlify]: https://www.netlify.com/
[neural networks]: https://en.wikipedia.org/wiki/Artificial_neural_network
[nfas]: https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton
[nix]: https://nixos.org/
[node.js]: https://nodejs.org/en/
[paredit]: http://danmidwood.com/content/2014/11/21/animated-paredit.html
[pass-ln]: https://github.com/radian-software/pass-ln
[pass]: https://www.passwordstore.org/
[pib-source]: https://github.com/radian-software/python-in-a-box
[pib]: https://python-in-a-box.radian.codes/
[pipenv]: https://pipenv.pypa.io/en/latest/
[pm]: https://en.wikipedia.org/wiki/Package_manager
[pmtud]: https://en.wikipedia.org/wiki/Path_MTU_Discovery
[prescient.el]: https://github.com/radian-software/prescient.el
[processing]: https://processing.org/
[progfolio]: https://github.com/progfolio
[projectile simulator]: https://github.com/radian-software/ProjectileSimulator
[projectile-motion]: https://en.wikipedia.org/wiki/Projectile_motion
[pset]: https://github.com/raxod502/pset
[puzzles]: https://github.com/raxod502/puzzles
[pyrelight]: https://github.com/radian-software/pyrelight
[python]: https://www.python.org/
[quantcast]: https://www.quantcast.com/
[radian llc]: https://radian.codes/
[radian-github]: https://github.com/radian-software
[radian]: https://github.com/radian-software/radian
[rcs patches]: https://tools.ietf.org/doc/tcllib/html/rcs.html#section4
[repl.it]: https://repl.it/
[rev-eng]: https://en.wikipedia.org/wiki/Reverse_engineering
[rh0]: https://tools.ietf.org/html/rfc2460#section-4.4
[riju-source]: https://github.com/radian-software/riju
[riju]: https://riju.codes/
[roguelike]: https://en.wikipedia.org/wiki/Roguelike
[ruby]: https://www.ruby-lang.org/en/
[sat]: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
[science-fair]: https://github.com/raxod502/ScienceFair
[selectrum]: https://github.com/radian-software/selectrum
[selenium]: https://www.selenium.dev/
[sfml]: https://www.sfml-dev.org/
[sg-puzzles]: http://mathworld.wolfram.com/Slothouber-GraatsmaPuzzle.html
[shannon]: https://www.linkedin.com/in/shannon-collier-631392149/
[signal]: https://signal.org/
[sleeping beauty]: https://github.com/radian-software/sleeping-beauty
[smarter-playlist]: https://github.com/radian-software/smarter-playlist
[smartparens]: https://github.com/Fuco1/smartparens
[space-grid]: https://github.com/raxod502/space-grid
[squeaky hinge]: https://github.com/radian-software/squeaky-hinge
[srh]: https://tools.ietf.org/html/rfc8754
[star relic]: http://www.ifgdb.com/play/star-relic/
[static site]: https://en.wikipedia.org/wiki/Static_web_page
[straight.el]: https://github.com/radian-software/straight.el
[sudoku]: https://en.wikipedia.org/wiki/Sudoku
[summit]: https://sum.bvsd.org/Pages/default.aspx
[swiper]: https://github.com/abo-abo/swiper#swiper
[symlinks]: https://en.wikipedia.org/wiki/Symbolic_link
[syntax tables]: https://www.gnu.org/software/emacs/manual/html_node/elisp/Syntax-Tables.html
[tabcrush]: https://github.com/radian-software/tabcrush
[tc-hn]: https://news.ycombinator.com/item?id=15460851
[terraria]: https://terraria.org/
[terrariaclone]: https://github.com/radian-software/TerrariaClone
[tetris-processing]: https://github.com/radian-software/tetris-processing
[tetris-python]: https://github.com/radian-software/tetris-python
[tetris]: https://en.wikipedia.org/wiki/Tetris
[ti-84-programs]: https://github.com/raxod502/TI84
[ti-84]: https://en.wikipedia.org/wiki/TI-84_Plus_series#TI-84_Plus_Silver_Edition
[tidier]: https://github.com/radian-software/tidier
[tikz]: https://en.wikipedia.org/wiki/PGF/TikZ
[tkinter]: https://docs.python.org/3/library/tkinter.html
[tmux]: https://tmux.github.io/
[turing machines]: https://en.wikipedia.org/wiki/Turing_machine
[unix filesystem]: https://en.wikipedia.org/wiki/Unix_filesystem
[unix philosophy]: https://en.wikipedia.org/wiki/Unix_philosophy
[unzuckify]: https://github.com/radian-software/unzuckify
[upm]: https://github.com/replit/upm
[utunes]: https://github.com/radian-software/utunes
[venmo auto transfer]: https://github.com/radian-software/venmo-auto-transfer
[venmo]: https://venmo.com/
[version control]: https://en.wikipedia.org/wiki/Version_control
[votinglib]: https://github.com/raxod502/VotingLib
[watching paint dry]: https://github.com/raxod502/Watching-Paint-Dry
[wd]: https://github.com/mfaerevaag/wd
[wdr-slides]: https://nextcloud.intuitiveexplanations.com/s/ZzNJW26CiMFB2T4
[wdr-source]: https://github.com/raxod502/cs121-hello
[wdr]: https://link.intuitiveexplanations.com/cs121-hello
[wdx]: https://github.com/radian-software/wdx
[webcomic]: https://en.wikipedia.org/wiki/Webcomic
[whales.life-source]: https://github.com/raxod502/cs121-whales
[whales.life]: https://cs121-whales.herokuapp.com/
[x86-64]: https://en.wikipedia.org/wiki/X86-64
[ytm]: https://music.youtube.com/
[zsh]: http://www.zsh.org/
