;(function(exports) {
  let first = function(x) {
    return x[0];
  };

  let rest = function(x) {
    return x.slice(1);
  };

  let list = function(...x) {
    return x;
  }

  let print = function(...x) {
    console.log(...x);
  }

  exports.first = first;
  exports.rest = rest;
  exports.print = print;
  exports.list = list;

  exports.true = true;
  
})(typeof exports === 'undefined' ? this : exports);
