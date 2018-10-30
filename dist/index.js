"use strict";

var _fourBitRippleCarryAdder = require("./components/fourBitRippleCarryAdder");

var int1 = parseInt(process.argv[2]);
var int2 = parseInt(process.argv[3]);

if (int1 > 15 || int2 > 15) {
  console.log("Must provide two integers with value less than 16");
}

var adder = new _fourBitRippleCarryAdder.FourBitRippleCarryAdder(int1, int2);
console.log("SUM: ", adder.getSum());