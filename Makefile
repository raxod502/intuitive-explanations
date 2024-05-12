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
all: tex resume stories build ## Fully build website

.PHONY: dev
dev: tex resume stories serve ## Fully build website and then run dev server

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

.PHONY: checklinks
checklinks: ## Check link anchors in Markdown files
	python3 tools/check_internal_links.py

.PHONY: clean
clean: ## Remove build artifacts
	git ls-files --others --ignored --exclude-standard 	\
		| grep -Ev '^(node_modules|\.env)'		\
		| xargs rm -v

.PHONY: docker
docker: ## Start a Docker shell
	tools/docker-run.bash "$(CMD)"
