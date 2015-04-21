import estraverse from 'estraverse';
import {find} from 'lodash';
import log from './logger.js';

export function requireParser(ast) {
  if (!ast) {
    return ast;
  }

  let deps = [];
  estraverse.traverse(ast, {
    enter (node, parent) {
      if (node.type === 'Identifier' && node.name === 'require' && parent.type === 'CallExpression') {
        deps.push(parent.arguments[0].value);
      }
    }
  });

  return deps;
}


export function mixinParser(ast, sourceCode) {
  if (!ast) {
    return ast;
  }

  let mixins = [];
  estraverse.traverse(ast, {
    enter (node, parent) {
      if (node.type === 'Identifier' && node.name === 'mixins' && parent.type === 'Property') {
        parent.value.elements.forEach((el) => {
          mixins.push(sourceCode.slice(el.start, el.end));
        });

        this.break();
      }
    }
  });

  return mixins;
}

export function nameParser(ast) {
  if (!ast) {
    return ast;
  }

  let name = '<<anonymous>>';
  estraverse.traverse(ast, {
    enter (node, parent) {
      if (node.type === 'Identifier' && node.value === 'displayName' && parent.type === 'Property') {
        name = parent.value.value;

        this.break();
      }
      else if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression' &&
               node.callee.object.name === 'React' && node.callee.property.name === 'createClass' &&
               parent.id
        ) {
        name = parent.id.name;

        this.break();
      }
    }
  });

  return name;
}

export function propsParser(ast, sourceCode) {
  if (!ast) {
    return ast;
  }

  let props = [];

  //Parse `propTypes`
  estraverse.traverse(ast, {
    enter (node, parent) {
      if (node.type === 'Identifier' && node.name === 'propTypes') {
        let propTypes = parent.value.properties;

        propTypes.forEach((item) => {
          let propName = item.key.name;
          let propType = item.value;

          let obj = {};
          obj.name = propName;
          obj.type = sourceCode
                      .slice(propType.start, propType.end)
                      .toString()
                      .replace(/React\.PropTypes\./g, '')
                      .replace(/\bfunc\b/, 'function');

          if (obj.type.indexOf('isRequired') > 0) {
            obj.type = obj.type.split('.').shift();
            obj.required = true;
          }
          else {
            obj.required = false;
          }

          props.push(obj);
        });

        this.break();
      }
    }
  });

  //Parse `getDefaultProps`
  estraverse.traverse(ast, {
    enter (node, parent) {
      if (node.type === 'Identifier' && node.name === 'getDefaultProps') {
        let body = parent.value.body.body;
        let ret = find(body, {type: 'ReturnStatement'});

        if (ret.argument.type !== 'ObjectExpression') {
          log('Can\'t process function expression as return value of getDefaultProps yet!');
          return props;
        }

        ret.argument.properties.forEach((val) => {
          let prop = val.key.name;
          let defaults = sourceCode.slice(val.value.start, val.value.end);

          let propInProps = find(props, {name: prop});
          if (propInProps) {
            propInProps.defaults = defaults;
          }
          else {
            props.push({
              name: prop,
              defaults: defaults
            });
          }
        });

        this.break();
      }
    }
  });

  return props;
}
