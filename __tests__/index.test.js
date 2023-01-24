import { actualJson, expectedResult, actualYaml } from '../__fixtures__/prepare_for_test.js';

test('gendiff JSON', () => {
  expect(actualJson).toEqual(expectedResult);
});

test('gendiff yaml', () => {
  expect(actualYaml).toEqual(expectedResult);
});
