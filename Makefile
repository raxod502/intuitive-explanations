PORT ?= 4000

LATEX := latexmk -cd -pdfxe -interaction=nonstopmode

LATEX_DOCS := $(wildcard doc/tex/documents/*/*.tex)

.PHONY: help
help: ## Show this message
	@echo "usage:" >&2
	@grep -h "[#]# " $(MAKEFILE_LIST)	| \
		sed 's/^/  make /'		| \
		sed 's/:[^#]*[#]# /|/'		| \
		sed 's/%/LANG/'			| \
		column -t -s'|' >&2

.PHONY: all
all: tex resume stories xcf build ## Fully build website

.PHONY: dev
dev: tex resume stories xcf serve ## Fully build website and then run dev server

.PHONY: serve
serve: ## Run developer server
	rm -rf out && npx eleventy --serve --port=$(PORT)

.PHONY: build
build: ## Build main website content
	rm -rf out && npx eleventy

.PHONY: tex
tex: ## Compile LaTeX
	for doc in $(LATEX_DOCS); do echo $$doc && $(LATEX) $$doc || exit 1; done

.PHONY: placeholder
placeholder: ## Compile placeholder document
	$(LATEX) doc/placeholder/Placeholder.tex

.PHONY: resume
resume: ## Compile resume
	if [ -e doc/resume/.git ]; then								\
		make -C doc/resume resume-public.pdf;						\
	else											\
		make placeholder;								\
		ln -s ../placeholder/Placeholder.pdf doc/resume/resume-public.pdf;		\
	fi

.PHONY: stories
stories: ## Compile Fiction Writing stories
	if [ -e doc/stories/.git ]; then								\
		make -C doc/stories;									\
	else												\
		make placeholder;									\
		mkdir -p doc/stories/lipogram doc/stories/roundone doc/stories/roundtwo;		\
		ln -s ../../placeholder/Placeholder.pdf doc/stories/lipogram/OpportunityForStudy.pdf;	\
		ln -s ../../placeholder/Placeholder.pdf doc/stories/roundone/TheGarden.pdf;		\
		ln -s ../../placeholder/Placeholder.pdf doc/stories/roundtwo/NewYearsDay.pdf;		\
	fi

.PHONY: xcf
xcf: ## Compile XCF images
	tools/convert-xcf.bash

.PHONY: checklinks
checklinks: ## Check link anchors in Markdown files
	python3 tools/check_links.py

.PHONY: clean
clean: ## Remove build artifacts
	git ls-files --others --ignored --exclude-standard 	\
		| grep -v '^node_modules/'			\
		| xargs rm -v					\
		| sed 's/^/Removed: /'

.PHONY: deploy
deploy: ## Deploy website to Netlify
	tools/deploy.bash

.PHONY: docker
docker: ## Start a Docker shell
	tools/docker-run.bash "$(CMD)"
