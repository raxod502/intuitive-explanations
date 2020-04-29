---
title: About Intuitive Explanations
redirect_from:
  - /about-this-site/
---

I was inspired to create this website after I wrote [*Calculus:
Intuitive Explanations*](/math/calculus-intuitive-explanations) and
wanted a way to make it accessible to more people. Since then, it has
grown to feature [more mathematical writing](/math) and other
miscellany. It now also functions as my personal website, featuring a
[list of projects](/about/projects) and [my
resume](/assets/Resume.pdf).

This website (aside from my resume, since its version history contains
personal information) is [open-source on
GitHub](https://github.com/raxod502/intuitive-explanations), and I
welcome contributions!

I write web content in
[Markdown](https://www.markdownguide.org/getting-started), and use a
*static site generator* called [Jekyll](https://jekyllrb.com/) to
transform it into HTML with the aid of the
[Liquid](https://shopify.github.io/liquid/) template language.

Most of my mathematical content, on the other hand, is written in
[LaTeX](https://www.latex-project.org/), a language for professional
mathematical and scientific typesetting, and compiled to PDF documents
available on this site.

My site is deployed on [Netlify](https://www.netlify.com/), an
extremely fast service for hosting static sites like this one.
However, since they don't provide infrastructure for complex
compilation steps (e.g. rendering LaTeX to PDF), I use
[CircleCI](https://circleci.com/) to do this automatically and then
deploy every time I push to GitHub.
