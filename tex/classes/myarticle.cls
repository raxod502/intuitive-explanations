\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{myarticle}[2016/03/31]

\RequirePackage[l2tabu,orthodox]{nag}
\LoadClass[12pt]{article}

\usepackage[margin=0.75in]{geometry}
\usepackage{microtype}
\usepackage{lipsum}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{mathtools}
\usepackage{hyperref}

\newcounter{compilation}
\newwrite\writecompilation
\newread\readcompilation
\openin\readcompilation=\jobname.vrs
\ifeof\readcompilation
  % no file yet
  \setcounter{compilation}{1}%
\else
  \read\readcompilation to \temp
  \setcounter{compilation}{\temp}%
  \stepcounter{compilation}%
\fi
\closein\readcompilation
\immediate\openout\writecompilation=\jobname.vrs
\immediate\write\writecompilation{\thecompilation}
\immediate\closeout\writecompilation

\renewcommand{\titlepage}[3]{%
  \title{#1}%
  \author{Radon Rosborough}%
  \date{}%
  \maketitle
  \thispagestyle{empty}
  \begin{center}
    \href{https://intuitiveexplanations.com/#2/}{https://intuitiveexplanations.com/#2/}
  \end{center}
  \vspace{4em}
  #3
  \vfill
  {\noindent \scriptsize Build \thecompilation

  \noindent Copyright \textcopyright{} 2016 by Radon Rosborough. This work is licensed under a \href{http://creativecommons.org/licenses/by-nc-nd/4.0/}{Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License}.}
  \clearpage}
