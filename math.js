;(function(exports) {
  let add = (...a) => {
    return a.reduce((a, v) => a + v);
  }

  let mul = (...a) => {
    return a.reduce((a, v) => a * v);
  }

  exports.math = {
    add: add,
    mul: mul
  };
})(typeof exports === 'undefined' ? this : exports);
