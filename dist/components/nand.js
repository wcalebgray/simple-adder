"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nand = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nand =
/*#__PURE__*/
function () {
  function Nand(input1, input2) {
    _classCallCheck(this, Nand);

    this.output = !(!!input1 && !!input2);
  }

  _createClass(Nand, [{
    key: "getOutput",
    value: function getOutput() {
      return this.output;
    }
  }]);

  return Nand;
}();

exports.Nand = Nand;