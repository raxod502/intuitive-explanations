LATEX := tectonic
JEKYLL := bundle exec jekyll

LATEX_DOCS := $(filter-out %/resume.tex,$(wildcard _src/tex/documents/*/*.tex))

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
	for doc in $(LATEX_DOCS); do $(LATEX) $$doc; done

.PHONY: resume
resume:
	$(LATEX) _src/tex/documents/resume/resume.tex

.PHONY: xcf
xcf:
	_scripts/convert_xcf.bash

.PHONY: clean
clean:
	git ls-files --others --ignored --exclude-standard 	\
		| grep -v '^_vendor/'				\
		| xargs rm -v					\
		| sed 's/^/Removed: /'

.PHONY: deploy
deploy:
	_scripts/deploy.bash
