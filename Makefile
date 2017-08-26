PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

js: FORCE

	mkdir -p out/
	browserify src/main.js -o out/main.js
	browserify src/sw.js -o out/sw.js

FORCE:
