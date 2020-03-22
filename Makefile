PORT ?= 4000
HOST ?= 127.0.0.1

LATEX := latexmk -cd -pdfxe -interaction=nonstopmode
JEKYLL := bundle exec jekyll

LATEX_DOCS := $(filter-out %/resume.tex,$(wildcard _src/tex/documents/*/*.tex))

.PHONY: help
help: ## Show this message
	@echo "usage:" >&2
	@grep -h "[#]# " $(MAKEFILE_LIST)	| \
		sed 's/^/  make /'		| \
		sed 's/:[^#]*[#]# /|/'		| \
		sed 's/%/LANG/'			| \
		column -t -s'|' >&2

.PHONY: all
all: tex resume xcf build ## Fully build website

.PHONY: dev
dev: tex resume xcf serve ## Fully build website and then run dev server

.PHONY: serve
serve: ## Run developer server
	$(JEKYLL) serve --port=$(PORT) --host=$(HOST)

.PHONY: build
build: ## Build main website content
	$(JEKYLL) build

.PHONY: tex
tex: ## Compile LaTeX
	for doc in $(LATEX_DOCS); do echo $$doc && $(LATEX) $$doc || exit 1; done

.PHONY: resume
resume: ## Compile resume
	make -C _src/tex/documents/resume resume-without-phone.pdf

.PHONY: xcf
xcf: ## Compile XCF images
	_scripts/convert-xcf.bash

.PHONY: checklinks
checklinks: ## Check link anchors in Markdown files
	python3 _scripts/check_links.py

.PHONY: clean
clean: ## Remove build artifacts
	git ls-files --others --ignored --exclude-standard 	\
		| grep -v '^_vendor/'				\
		| xargs rm -v					\
		| sed 's/^/Removed: /'

.PHONY: deploy
deploy: ## Deploy website to Netlify
	_scripts/deploy.bash

.PHONY: docker
docker: ## Start a Docker shell
	@_scripts/docker.bash "$(CMD)"
