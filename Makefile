install:
	npm ci

fix:
	npx eslint --fix .

lint:
	npx eslint .

test:
	npm test

gendiff:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

.PHONY: test
