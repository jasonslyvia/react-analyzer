'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = reactAnalyzer;

var _readFileSync = require('fs');

var _transform = require('babel');

var _log = require('./logger.js');

var _log2 = _interopRequireWildcard(_log);

var _requireParser$mixinParser$propsParser$nameParser = require('./parser.js');

var _inspect = require('util');

function reactAnalyzer(file) {
  if (!file) {
    _log2['default']('error', 'Please specify filepath or source code');
    return file;
  }

  if (typeof file === 'string' && /\.jsx?$/.test(file)) {
    file = _readFileSync.readFileSync(file).toString();
    if (!file) {
      return file;
    }
  }

  _log2['default']('Transforming with Babel');
  var ast = _transform.transform(file, { stage: 0 }).ast.program;

  return {
    name: _requireParser$mixinParser$propsParser$nameParser.nameParser(ast),
    deps: _requireParser$mixinParser$propsParser$nameParser.requireParser(ast),
    props: _requireParser$mixinParser$propsParser$nameParser.propsParser(ast, file),
    mixins: _requireParser$mixinParser$propsParser$nameParser.mixinParser(ast, file)
  };
}

;
module.exports = exports['default'];