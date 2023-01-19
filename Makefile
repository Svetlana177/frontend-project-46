install: install-deps
	npx simple-git-hooks

install-deps:
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
	npm test -- --coverage --coverageProvider=v8

gendiff:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

.PHONY: test
