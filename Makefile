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
dev: tex resume xcf serve

.PHONY: serve
serve:
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
	git clean -ffdX -e "!/_vendor/"
