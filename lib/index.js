"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var reactAnalyzer = _interopRequire(require("./analyzer"));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
})(undefined, function () {
    return reactAnalyzer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQU8sYUFBYSwyQkFBTSxZQUFZOztBQUV0QyxBQUFDLENBQUEsVUFBVSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3RCLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDNUMsY0FBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN2QixNQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ3BDLGNBQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLENBQUM7S0FDOUIsTUFBTTtBQUNILFlBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxFQUFFLENBQUM7S0FDcEM7Q0FDRixDQUFBLFlBQU8sWUFBWTtBQUNoQixXQUFPLGFBQWEsQ0FBQztDQUN4QixDQUFDLENBQUUiLCJmaWxlIjoic3JjL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0QW5hbHl6ZXIgZnJvbSAnLi9hbmFseXplcic7XG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LnJldHVybkV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZWFjdEFuYWx5emVyO1xufSkpO1xuIl19