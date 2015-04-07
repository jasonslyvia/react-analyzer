export default function logger(type = 'log', message) {
  if (arguments.length === 1) {
    message = type;
    type = 'log';
  }

  var prefix = 'react-analyzer ';

  if (typeof window === 'object' && typeof window.console === 'object') {
    window.console[type](prefix + message);
  }
  else if (typeof console === 'object') {
    console[type](prefix + message);
  }
};
