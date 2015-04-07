"use strict";

module.exports = logger;

function logger(_x, message) {
  var type = arguments[0] === undefined ? "log" : arguments[0];

  if (arguments.length === 1) {
    message = type;
    type = "log";
  }

  var prefix = "react-analyzer ";

  if (typeof window === "object" && typeof window.console === "object") {
    window.console[type](prefix + message);
  } else if (typeof console === "object") {
    console[type](prefix + message);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7aUJBQXdCLE1BQU07O0FBQWYsU0FBUyxNQUFNLEtBQWUsT0FBTyxFQUFFO01BQXZCLElBQUksZ0NBQUcsS0FBSzs7QUFDekMsTUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMxQixXQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2YsUUFBSSxHQUFHLEtBQUssQ0FBQztHQUNkOztBQUVELE1BQUksTUFBTSxHQUFHLGlCQUFpQixDQUFDOztBQUUvQixNQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ3BFLFVBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0dBQ3hDLE1BQ0ksSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDcEMsV0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQztHQUNqQztDQUNGIiwiZmlsZSI6InNyYy9sb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dnZXIodHlwZSA9ICdsb2cnLCBtZXNzYWdlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgbWVzc2FnZSA9IHR5cGU7XG4gICAgdHlwZSA9ICdsb2cnO1xuICB9XG5cbiAgdmFyIHByZWZpeCA9ICdyZWFjdC1hbmFseXplciAnO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUgPT09ICdvYmplY3QnKSB7XG4gICAgd2luZG93LmNvbnNvbGVbdHlwZV0ocHJlZml4ICsgbWVzc2FnZSk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc29sZVt0eXBlXShwcmVmaXggKyBtZXNzYWdlKTtcbiAgfVxufTtcbiJdfQ==