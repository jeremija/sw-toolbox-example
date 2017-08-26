PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

watch: FORCE

	chastifol \
		[ watchify -d -v -o out/main.js src/main.js ] \
		[ watchify -d -v -o out/sw.js src/sw.js ] \
		[ http-server -c0 ]


js: FORCE

	mkdir -p out/
	browserify -d -o out/main.js src/main.js
	browserify -d -o out/sw.js src/sw.js

FORCE:
