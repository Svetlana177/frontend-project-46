import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const makeParse = (configPath) => {
  const current = process.cwd();
  const format = path.extname(configPath);
  const file = fs.readFileSync(path.resolve(current, configPath), 'utf-8');
  let parse;
  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yaml') {
    parse = yaml.load;
  } else if (format === '.yml') {
    parse = yaml.load;
  } return parse(file);
};

export default makeParse;
