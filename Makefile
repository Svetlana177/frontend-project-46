install:
	npm ci

publish:
	npm publish --dry-run

fix:
	npx eslint --fix .

lint:
	npx eslint .

gendiff:
	node bin/gendiff.js -h

.PHONY: gendiff
