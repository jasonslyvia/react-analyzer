'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.requireParser = requireParser;
exports.mixinParser = mixinParser;
exports.nameParser = nameParser;
exports.propsParser = propsParser;

var _estraverse = require('estraverse');

var _estraverse2 = _interopRequireWildcard(_estraverse);

var _find = require('lodash');

var _log = require('./logger.js');

var _log2 = _interopRequireWildcard(_log);

function requireParser(ast) {
  if (!ast) {
    return ast;
  }

  var deps = [];
  _estraverse2['default'].traverse(ast, {
    enter: function enter(node, parent) {
      if (node.type === 'Identifier' && node.name === 'require' && parent.type === 'CallExpression') {
        deps.push(parent.arguments[0].value);
      }
    }
  });

  return deps;
}

function mixinParser(ast, sourceCode) {
  if (!ast) {
    return ast;
  }

  var mixins = [];
  _estraverse2['default'].traverse(ast, {
    enter: function enter(node, parent) {
      if (node.type === 'Identifier' && node.name === 'mixins' && parent.type === 'Property') {
        parent.value.elements.forEach(function (el) {
          mixins.push(sourceCode.slice(el.start, el.end));
        });

        this['break']();
      }
    }
  });

  return mixins;
}

function nameParser(ast) {
  if (!ast) {
    return ast;
  }

  var name = '<<anonymous>>';
  _estraverse2['default'].traverse(ast, {
    enter: function enter(node, parent) {
      if (node.type === 'Identifier' && node.value === 'displayName' && parent.type === 'Property') {
        name = parent.value.value;

        this['break']();
      } else if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression' && node.callee.object.name === 'React' && node.callee.property.name === 'createClass' && parent.id) {
        name = parent.id.name;

        this['break']();
      }
    }
  });

  return name;
}

function propsParser(ast, sourceCode) {
  if (!ast) {
    return ast;
  }

  var props = [];

  //Parse `propTypes`
  _estraverse2['default'].traverse(ast, {
    enter: function enter(node, parent) {
      if (node.type === 'Identifier' && node.name === 'propTypes') {
        var propTypes = parent.value.properties;

        propTypes.forEach(function (item) {
          var propName = item.key.name;
          var propType = item.value;

          var obj = {};
          obj.name = propName;
          obj.type = sourceCode.slice(propType.start, propType.end).toString().replace(/React\.PropTypes\./g, '').replace(/\bfunc\b/, 'function');
          props.push(obj);
        });

        this['break']();
      }
    }
  });

  //Parse `getDefaultProps`
  _estraverse2['default'].traverse(ast, {
    enter: function enter(node, parent) {
      if (node.type === 'Identifier' && node.name === 'getDefaultProps') {
        var body = parent.value.body.body;
        var ret = _find.find(body, { type: 'ReturnStatement' });

        if (ret.argument.type !== 'ObjectExpression') {
          _log2['default']('Can\'t process function expression as return value of getDefaultProps yet!');
          return props;
        }

        ret.argument.properties.forEach(function (val) {
          var prop = val.key.name;
          var defaults = sourceCode.slice(val.value.start, val.value.end);

          var propInProps = _find.find(props, { name: prop });
          if (propInProps) {
            propInProps.defaults = defaults;
          } else {
            props.push({
              name: prop,
              defaults: defaults
            });
          }
        });

        this['break']();
      }
    }
  });

  return props;
}