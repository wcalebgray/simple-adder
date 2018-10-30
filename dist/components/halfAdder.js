"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HalfAdder = void 0;

var _and = require("./and");

var _xor = require("./xor");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HalfAdder =
/*#__PURE__*/
function () {
  function HalfAdder(augend, addend) {
    _classCallCheck(this, HalfAdder);

    this.sum = new _xor.Xor(augend, addend).getOutput();
    this.carry = new _and.And(augend, addend).getOutput();
  }

  _createClass(HalfAdder, [{
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

  return HalfAdder;
}();

exports.HalfAdder = HalfAdder;