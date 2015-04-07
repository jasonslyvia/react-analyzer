import {readFileSync} from 'fs';
import {transform} from 'babel';
import log from './logger.js';
import {requireParser, mixinParser, propsParser, nameParser} from './parser.js';
import {inspect} from 'util';

export default function reactAnalyzer (file) {
  if (!file) {
    log('error', 'Please specify filepath or source code');
    return file;
  }

  if (typeof file === 'string' && /\.jsx?$/.test(file)) {
    file = readFileSync(file).toString();
    if (!file) {
      return file;
    }
  }

  log('Transforming with Babel');
  var ast = transform(file).ast.program;

  return {
    name: nameParser(ast),
    deps: requireParser(ast),
    props: propsParser(ast, file),
    mixins: mixinParser(ast, file)
  };
};
