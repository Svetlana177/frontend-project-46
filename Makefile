install:
	npm ci

fix:
	npx eslint --fix .

lint:
	npx eslint .

test:
	npm test
jest:
	jest --watch

test-coverage:
	npx jest --coverage

gendiff:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

.PHONY: test
