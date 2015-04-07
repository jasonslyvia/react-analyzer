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
    mixins: mixinParser(ast)
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmFseXplci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O2lCQU13QixhQUFhOztJQU43QixZQUFZLFdBQU8sSUFBSSxFQUF2QixZQUFZOztJQUNaLFNBQVMsV0FBTyxPQUFPLEVBQXZCLFNBQVM7O0lBQ1YsR0FBRywyQkFBTSxhQUFhOzt3QkFDcUMsYUFBYTs7SUFBdkUsYUFBYSxhQUFiLGFBQWE7SUFBRSxXQUFXLGFBQVgsV0FBVztJQUFFLFdBQVcsYUFBWCxXQUFXO0lBQUUsVUFBVSxhQUFWLFVBQVU7O0lBQ25ELE9BQU8sV0FBTyxNQUFNLEVBQXBCLE9BQU87O0FBRUEsU0FBUyxhQUFhLENBQUUsSUFBSSxFQUFFO0FBQzNDLE1BQUksQ0FBQyxJQUFJLEVBQUU7QUFDVCxPQUFHLENBQUMsT0FBTyxFQUFFLHdDQUF3QyxDQUFDLENBQUM7QUFDdkQsV0FBTyxJQUFJLENBQUM7R0FDYjs7QUFFRCxNQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BELFFBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDckMsUUFBSSxDQUFDLElBQUksRUFBRTtBQUNULGFBQU8sSUFBSSxDQUFDO0tBQ2I7R0FDRjs7QUFFRCxLQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUMvQixNQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7QUFFdEMsU0FBTztBQUNMLFFBQUksRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQ3JCLFFBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDO0FBQ3hCLFNBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztBQUM3QixVQUFNLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQztHQUN6QixDQUFDO0NBQ0giLCJmaWxlIjoic3JjL2FuYWx5emVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZWFkRmlsZVN5bmN9IGZyb20gJ2ZzJztcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tICdiYWJlbCc7XG5pbXBvcnQgbG9nIGZyb20gJy4vbG9nZ2VyLmpzJztcbmltcG9ydCB7cmVxdWlyZVBhcnNlciwgbWl4aW5QYXJzZXIsIHByb3BzUGFyc2VyLCBuYW1lUGFyc2VyfSBmcm9tICcuL3BhcnNlci5qcyc7XG5pbXBvcnQge2luc3BlY3R9IGZyb20gJ3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWFjdEFuYWx5emVyIChmaWxlKSB7XG4gIGlmICghZmlsZSkge1xuICAgIGxvZygnZXJyb3InLCAnUGxlYXNlIHNwZWNpZnkgZmlsZXBhdGggb3Igc291cmNlIGNvZGUnKTtcbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3N0cmluZycgJiYgL1xcLmpzeD8kLy50ZXN0KGZpbGUpKSB7XG4gICAgZmlsZSA9IHJlYWRGaWxlU3luYyhmaWxlKS50b1N0cmluZygpO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfVxuICB9XG5cbiAgbG9nKCdUcmFuc2Zvcm1pbmcgd2l0aCBCYWJlbCcpO1xuICB2YXIgYXN0ID0gdHJhbnNmb3JtKGZpbGUpLmFzdC5wcm9ncmFtO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZVBhcnNlcihhc3QpLFxuICAgIGRlcHM6IHJlcXVpcmVQYXJzZXIoYXN0KSxcbiAgICBwcm9wczogcHJvcHNQYXJzZXIoYXN0LCBmaWxlKSxcbiAgICBtaXhpbnM6IG1peGluUGFyc2VyKGFzdClcbiAgfTtcbn07XG4iXX0=