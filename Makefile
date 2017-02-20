all:
	latexmk -pdf -cd tex/documents/*/*.tex
	hugo

clean:
	rm -fr public
	rm -fr tex/classes/auto
	rm -f tex/documents/*/*.aux
	rm -f tex/documents/*/*.fdb_latexmk
	rm -f tex/documents/*/*.fls
	rm -f tex/documents/*/*.log
	rm -f tex/documents/*/*.nav
	rm -f tex/documents/*/*.out
	rm -f tex/documents/*/*.pdf
	rm -f tex/documents/*/*.snm
	rm -f tex/documents/*/*.toc
	rm -fr tex/documents/*/auto

.PHONY: all clean
