\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{myart}[2016/03/31]

\RequirePackage[l2tabu,orthodox]{nag}
\LoadClass[12pt]{amsart}

\usepackage[margin=0.75in]{geometry}
\usepackage{microtype}
\usepackage{lipsum}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{mathtools}
\usepackage[hidelinks]{hyperref}

\renewcommand{\titlepage}[3]{%
  \title{#1}%
  \author{Radon Rosborough}%
  \date{}%
  \maketitle
  \thispagestyle{empty}
  \begin{center}
    \href{https://intuitiveexplanations.com/math/#2/}{https://intuitiveexplanations.com/math/#2/}
  \end{center}
  \vspace{4em}
  #3
  \clearpage}
