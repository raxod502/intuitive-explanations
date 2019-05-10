LATEX := latexmk -cd -interaction=nonstopmode
JEKYLL := bundle exec jekyll

LATEX_DOCS := $(wildcard _src/tex/documents/*/*.tex)
LATEX_DOCS_NORMAL := $(filter-out %/resume.tex,$(LATEX_DOCS))
LATEX_DOCS_RESUME := $(filter     %/resume.tex,$(LATEX_DOCS))

LATEX_FLAGS_NORMAL := -pdf
LATEX_FLAGS_RESUME := -pdfxe -shell-escape -jobname=resume-nophone

.PHONY: all
all: tex resume xcf build

.PHONY: dev
dev:
	$(JEKYLL) serve

.PHONY: build
build:
	$(JEKYLL) build

.PHONY: tex
tex:
	$(LATEX) $(LATEX_FLAGS_NORMAL) $(LATEX_DOCS_NORMAL)

.PHONY: resume
resume:
	$(LATEX) $(LATEX_FLAGS_RESUME) $(LATEX_DOCS_RESUME)

.PHONY: xcf
xcf:
	_scripts/convert_xcf.bash

.PHONY: clean
clean:
	rm -rf						\
		.jekyll-metadata			\
		.sass-cache				\
		_site					\
		_src/tex/classes/auto			\
		_src/tex/documents/*/auto		\
		_src/tex/documents/*/*.aux		\
		_src/tex/documents/*/*.fdb_latexmk	\
		_src/tex/documents/*/*.fls		\
		_src/tex/documents/*/*.log		\
		_src/tex/documents/*/*.out		\
		_src/tex/documents/*/*.pdf		\
		_src/tex/documents/*/*.toc		\
		_src/xcf/out
