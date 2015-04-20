'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = logger;

function logger(_x, message) {
  var type = arguments[0] === undefined ? 'log' : arguments[0];

  if (arguments.length === 1) {
    message = type;
    type = 'log';
  }

  var prefix = 'react-analyzer ';

  if (typeof window === 'object' && typeof window.console === 'object') {
    window.console[type](prefix + message);
  } else if (typeof console === 'object') {
    console[type](prefix + message);
  }
}

;
module.exports = exports['default'];