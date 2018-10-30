"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullAdder = void 0;

var _halfAdder = require("./halfAdder");

var _or = require("./or");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FullAdder =
/*#__PURE__*/
function () {
  function FullAdder(a, b, cin) {
    _classCallCheck(this, FullAdder);

    var halfAdderA = new _halfAdder.HalfAdder(a, b);
    var halfAdderB = new _halfAdder.HalfAdder(halfAdderA.getSum(), cin);
    this.sum = halfAdderB.getSum();
    this.carry = new _or.Or(halfAdderA.getCarry(), halfAdderB.getCarry()).getOutput();
  }

  _createClass(FullAdder, [{
    key: "getSum",
    value: function getSum() {
      return this.sum;
    }
  }, {
    key: "getCarry",
    value: function getCarry() {
      return this.carry;
    }
  }]);

  return FullAdder;
}();

exports.FullAdder = FullAdder;