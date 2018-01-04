run: bower css build/my.js

bower: bower.json
	#bower

css:
	sass --no-cache --sourcemap=none src/my.scss:build/my.css --style compressed

build/my.js: src/my.js
	cp $^ $@
