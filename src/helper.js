// Reverse the object method call to string from AST
export function memberExpressionHelper(node) {
  if (!node || node.type !== 'MemberExpression') {
    return '';
  }

  if (node.object.type === 'MemberExpression') {
    return memberExpressionHelper(node.object) + node.property.name + '.';
  }
  else if (node.object.type === 'Identifier') {
    return node.object.name + '.' + node.property.name + '.';
  }
}
