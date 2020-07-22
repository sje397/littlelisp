;(function(exports) {
  let first = function(x) {
    return x[0];
  };

  let rest = function(x) {
    return x.slice(1);
  };

  let print = function(...x) {
    console.log(...x);
  }

  exports.first = first;
  exports.rest = rest;
  exports.print = print;
})(typeof exports === 'undefined' ? this : exports);
