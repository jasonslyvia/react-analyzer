"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = reactAnalyzer;

var readFileSync = require("fs").readFileSync;

var transform = require("babel").transform;

var log = _interopRequire(require("./logger.js"));

var _parserJs = require("./parser.js");

var requireParser = _parserJs.requireParser;
var mixinParser = _parserJs.mixinParser;
var propsParser = _parserJs.propsParser;
var nameParser = _parserJs.nameParser;

var inspect = require("util").inspect;

function reactAnalyzer(file) {
  if (!file) {
    log("error", "Please specify filepath or source code");
    return file;
  }

  if (typeof file === "string" && /\.jsx?$/.test(file)) {
    file = readFileSync(file).toString();
    if (!file) {
      return file;
    }
  }

  log("Transforming with Babel");
  var ast = transform(file).ast.program;

  return {
    name: nameParser(ast),
    deps: requireParser(ast),
    props: propsParser(ast, file),
    mixins: mixinParser(ast, file)
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmFseXplci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O2lCQU13QixhQUFhOztJQU43QixZQUFZLFdBQU8sSUFBSSxFQUF2QixZQUFZOztJQUNaLFNBQVMsV0FBTyxPQUFPLEVBQXZCLFNBQVM7O0lBQ1YsR0FBRywyQkFBTSxhQUFhOzt3QkFDcUMsYUFBYTs7SUFBdkUsYUFBYSxhQUFiLGFBQWE7SUFBRSxXQUFXLGFBQVgsV0FBVztJQUFFLFdBQVcsYUFBWCxXQUFXO0lBQUUsVUFBVSxhQUFWLFVBQVU7O0lBQ25ELE9BQU8sV0FBTyxNQUFNLEVBQXBCLE9BQU87O0FBRUEsU0FBUyxhQUFhLENBQUUsSUFBSSxFQUFFO0FBQzNDLE1BQUksQ0FBQyxJQUFJLEVBQUU7QUFDVCxPQUFHLENBQUMsT0FBTyxFQUFFLHdDQUF3QyxDQUFDLENBQUM7QUFDdkQsV0FBTyxJQUFJLENBQUM7R0FDYjs7QUFFRCxNQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BELFFBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDckMsUUFBSSxDQUFDLElBQUksRUFBRTtBQUNULGFBQU8sSUFBSSxDQUFDO0tBQ2I7R0FDRjs7QUFFRCxLQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUMvQixNQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7QUFFdEMsU0FBTztBQUNMLFFBQUksRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQ3JCLFFBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDO0FBQ3hCLFNBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztBQUM3QixVQUFNLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7R0FDL0IsQ0FBQztDQUNIIiwiZmlsZSI6InNyYy9hbmFseXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVhZEZpbGVTeW5jfSBmcm9tICdmcyc7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSAnYmFiZWwnO1xuaW1wb3J0IGxvZyBmcm9tICcuL2xvZ2dlci5qcyc7XG5pbXBvcnQge3JlcXVpcmVQYXJzZXIsIG1peGluUGFyc2VyLCBwcm9wc1BhcnNlciwgbmFtZVBhcnNlcn0gZnJvbSAnLi9wYXJzZXIuanMnO1xuaW1wb3J0IHtpbnNwZWN0fSBmcm9tICd1dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhY3RBbmFseXplciAoZmlsZSkge1xuICBpZiAoIWZpbGUpIHtcbiAgICBsb2coJ2Vycm9yJywgJ1BsZWFzZSBzcGVjaWZ5IGZpbGVwYXRoIG9yIHNvdXJjZSBjb2RlJyk7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpZiAodHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnICYmIC9cXC5qc3g/JC8udGVzdChmaWxlKSkge1xuICAgIGZpbGUgPSByZWFkRmlsZVN5bmMoZmlsZSkudG9TdHJpbmcoKTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH1cbiAgfVxuXG4gIGxvZygnVHJhbnNmb3JtaW5nIHdpdGggQmFiZWwnKTtcbiAgdmFyIGFzdCA9IHRyYW5zZm9ybShmaWxlKS5hc3QucHJvZ3JhbTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWVQYXJzZXIoYXN0KSxcbiAgICBkZXBzOiByZXF1aXJlUGFyc2VyKGFzdCksXG4gICAgcHJvcHM6IHByb3BzUGFyc2VyKGFzdCwgZmlsZSksXG4gICAgbWl4aW5zOiBtaXhpblBhcnNlcihhc3QsIGZpbGUpXG4gIH07XG59O1xuIl19