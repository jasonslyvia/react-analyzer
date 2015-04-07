import reactAnalyzer from './analyzer';

if (typeof window === 'object') {
  window.reactAnalyzer = reactAnalyzer;
}
else {
  module.exports = reactAnalyzer;
}
