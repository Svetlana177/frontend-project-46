import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const actualJson = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
const actualYaml = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'));

const readResult = readFile('expected_result.txt');
const expectedResult = readResult.trim();

export {
  actualJson,
  expectedResult,
  actualYaml,
};
