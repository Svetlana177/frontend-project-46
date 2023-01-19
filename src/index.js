import path from 'path';
import _ from 'lodash';
import fs from 'fs';

const mainFunction = (parseFilepath1, parseFilepath2, key) => {
  let result = '';

  if (_.has(parseFilepath1, key) && _.has(parseFilepath2, key)) {
    if (parseFilepath1[key] === parseFilepath2[key]) {
      result = `    ${key}: ${parseFilepath1[key]}`;
      return result;
    }
    if (parseFilepath1[key] !== parseFilepath2[key]) {
      result = `  - ${key}: ${parseFilepath1[key]}
  + ${key}: ${parseFilepath2[key]}`;
      return result;
    }
  }
  if (_.has(parseFilepath1, key)) {
    result = `  - ${key}: ${parseFilepath1[key]}`;
    return result;
  }

  result = `  + ${key}: ${parseFilepath2[key]}`;
  return result;
};

const genDiff = (filepath1, filepath2) => {
  const current = process.cwd();
  const path1 = fs.readFileSync(path.resolve(current, filepath1), 'utf-8');
  const parseFilepath1 = JSON.parse(path1);
  const path2 = fs.readFileSync(path.resolve(current, filepath2), 'utf-8');
  const parseFilepath2 = JSON.parse(path2);
  const sortMass = _.sortBy([...Object.entries(parseFilepath1), ...Object.entries(parseFilepath2)]);
  const entries = Object.keys(Object.fromEntries(sortMass));
  const difference = entries.map((key) => mainFunction(parseFilepath1, parseFilepath2, key));
  return `{\n${difference.join('\n')}\n}`;
};

export default genDiff;
