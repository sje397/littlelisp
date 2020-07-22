var repl = require("repl");
var littleLisp = require("./littlelisp").littleLisp;

littleLisp.interpret(littleLisp.parse('(import "core")'));

repl.start({
  prompt: "> ",
  eval: function(cmd, context, filename, callback) {
    var ret = littleLisp.interpret(littleLisp.parse(cmd));
    callback(null, ret);
  }
});
