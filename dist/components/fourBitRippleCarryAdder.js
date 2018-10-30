"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FourBitRippleCarryAdder = void 0;

var _fullAdder = require("./fullAdder");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FourBitRippleCarryAdder =
/*#__PURE__*/
function () {
  function FourBitRippleCarryAdder(int1, int2) {
    _classCallCheck(this, FourBitRippleCarryAdder);

    this.int1Binary = this.intToBinArray(int1);
    this.int2Binary = this.intToBinArray(int2);
    this.sumBinary = this.calculate();
  }

  _createClass(FourBitRippleCarryAdder, [{
    key: "boolToInt",
    value: function boolToInt(bool) {
      return bool ? 1 : 0;
    }
  }, {
    key: "calculate",
    value: function calculate() {
      this.int1Binary.reverse();
      this.int2Binary.reverse();
      var fullAdders = [];
      var sumBinary = [];
      var ci = 0;

      for (var i = 0; i < 4; i++) {
        if (i !== 0) {
          ci = this.boolToInt(fullAdders[i - 1].getCarry());
        }

        fullAdders[i] = new _fullAdder.FullAdder(this.int1Binary[i], this.int2Binary[i], ci);
        sumBinary[i] = this.boolToInt(fullAdders[i].getSum());

        if (i === 3) {
          sumBinary[i + 1] = this.boolToInt(fullAdders[i].getCarry());
        }
      }

      return sumBinary.reverse();
    }
  }, {
    key: "intToFourBitString",
    value: function intToFourBitString(int) {
      var bitString = int.toString(2);
      var zerosToPad = 4 - bitString.length;
      return '0'.repeat(zerosToPad) + bitString;
    }
  }, {
    key: "intToBinArray",
    value: function intToBinArray(int) {
      var binString = this.intToFourBitString(int);
      var bin = [];
      binString.split('').forEach(function (bit, index) {
        bin[index] = parseInt(bit);
      });
      return bin;
    }
  }, {
    key: "binArrayToInt",
    value: function binArrayToInt(array) {
      var int = 0;
      array.reverse();
      array.forEach(function (bit, index) {
        int += bit * Math.pow(2, index);
      });
      return int;
    }
  }, {
    key: "getSum",
    value: function getSum() {
      return this.binArrayToInt(this.sumBinary);
    }
  }]);

  return FourBitRippleCarryAdder;
}();

exports.FourBitRippleCarryAdder = FourBitRippleCarryAdder;