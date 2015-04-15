// Reverse the object method call to string from AST
"use strict";

exports.memberExpressionHelper = memberExpressionHelper;
Object.defineProperty(exports, "__esModule", {
  value: true
});

function memberExpressionHelper(node) {
  if (!node || node.type !== "MemberExpression") {
    return "";
  }

  if (node.object.type === "MemberExpression") {
    return memberExpressionHelper(node.object) + node.property.name + ".";
  } else if (node.object.type === "Identifier") {
    return node.object.name + "." + node.property.name + ".";
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQ2dCLHNCQUFzQixHQUF0QixzQkFBc0I7Ozs7O0FBQS9CLFNBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFO0FBQzNDLE1BQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxrQkFBa0IsRUFBRTtBQUM3QyxXQUFPLEVBQUUsQ0FBQztHQUNYOztBQUVELE1BQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssa0JBQWtCLEVBQUU7QUFDM0MsV0FBTyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0dBQ3ZFLE1BQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7QUFDMUMsV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0dBQzFEO0NBQ0YiLCJmaWxlIjoic3JjL2hlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFJldmVyc2UgdGhlIG9iamVjdCBtZXRob2QgY2FsbCB0byBzdHJpbmcgZnJvbSBBU1RcbmV4cG9ydCBmdW5jdGlvbiBtZW1iZXJFeHByZXNzaW9uSGVscGVyKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8IG5vZGUudHlwZSAhPT0gJ01lbWJlckV4cHJlc3Npb24nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKG5vZGUub2JqZWN0LnR5cGUgPT09ICdNZW1iZXJFeHByZXNzaW9uJykge1xuICAgIHJldHVybiBtZW1iZXJFeHByZXNzaW9uSGVscGVyKG5vZGUub2JqZWN0KSArIG5vZGUucHJvcGVydHkubmFtZSArICcuJztcbiAgfVxuICBlbHNlIGlmIChub2RlLm9iamVjdC50eXBlID09PSAnSWRlbnRpZmllcicpIHtcbiAgICByZXR1cm4gbm9kZS5vYmplY3QubmFtZSArICcuJyArIG5vZGUucHJvcGVydHkubmFtZSArICcuJztcbiAgfVxufVxuIl19