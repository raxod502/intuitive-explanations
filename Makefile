LATEX := latexmk -cd -pdf -interaction=nonstopmode
JEKYLL := bundle exec jekyll

.PHONY: dev
dev:
	$(JEKYLL) serve

.PHONY: build
build:
	$(JEKYLL) build

.PHONY: tex
tex:
	$(LATEX) _src/tex/documents/*/*.tex

.PHONY: clean
clean:
	rm -rf                                     \
		_site                              \
		_src/tex/classes/auto              \
		_src/tex/documents/*/auto          \
		_src/tex/documents/*/*.aux         \
		_src/tex/documents/*/*.fdb_latexmk \
		_src/tex/documents/*/*.fls         \
		_src/tex/documents/*/*.log         \
		_src/tex/documents/*/*.out         \
		_src/tex/documents/*/*.pdf         \
		_src/tex/documents/*/*.toc
