'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _reactAnalyzer = require('./analyzer');

var _reactAnalyzer2 = _interopRequireWildcard(_reactAnalyzer);

if (typeof window === 'object') {
  window.reactAnalyzer = _reactAnalyzer2['default'];
} else {
  module.exports = _reactAnalyzer2['default'];
}