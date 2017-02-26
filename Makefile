all: tex static public

dev: tex static server

tex:
	latexmk -pdf -cd -interaction=nonstopmode tex/documents/*/*.tex

static:
	script/static.sh

public:
	rm -fr public
	hugo

server:
	hugo server

clean:
	rm -fr public
	rm -fr static
	rm -fr tex/classes/auto
	rm -f  tex/documents/*/*.aux
	rm -f  tex/documents/*/*.fdb_latexmk
	rm -f  tex/documents/*/*.fls
	rm -f  tex/documents/*/*.log
	rm -f  tex/documents/*/*.nav
	rm -f  tex/documents/*/*.out
	rm -f  tex/documents/*/*.pdf
	rm -f  tex/documents/*/*.snm
	rm -f  tex/documents/*/*.toc
	rm -fr tex/documents/*/auto

.PHONY: all dev tex static public server clean
