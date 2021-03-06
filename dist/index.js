"use strict";

var _rippleCarryAdder = require("./components/rippleCarryAdder");

var int1 = parseInt(process.argv[2]);
var int2 = parseInt(process.argv[3]);

if (int1 > 15 || int2 > 15) {
  console.log("Must provide two integers with value less than 16");
}

var adder = new _rippleCarryAdder.RippleCarryAdder(int1, int2);
console.log("SUM: ", adder.getSum());