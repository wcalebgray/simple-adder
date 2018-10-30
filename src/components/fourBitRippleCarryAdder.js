import { FullAdder } from './fullAdder';

export class FourBitRippleCarryAdder {
  constructor(int1, int2) {
    this.int1Binary = this.intToBinArray(int1);
    this.int2Binary = this.intToBinArray(int2);
    this.sumBinary = this.calculate();
  }

  boolToInt(bool) {
    return bool ? 1 : 0;
  }

  calculate() {
    this.int1Binary.reverse();
    this.int2Binary.reverse();
    let fullAdders = [];
    let sumBinary = [];
    let ci = 0;
    for(let i=0; i<4; i++){
      if(i !== 0){
        ci = this.boolToInt(fullAdders[i-1].getCarry());
      } 

      fullAdders[i] = new FullAdder(this.int1Binary[i], this.int2Binary[i], ci)
      sumBinary[i] = this.boolToInt(fullAdders[i].getSum())

      if(i===3){
        sumBinary[i + 1] = this.boolToInt(fullAdders[i].getCarry());
      }
    }
    return sumBinary.reverse();
  }

  intToFourBitString(int) {
    const bitString = int.toString(2);
    const zerosToPad = 4 - bitString.length;
    return '0'.repeat(zerosToPad) + bitString;
  }

  intToBinArray(int) {
    const binString = this.intToFourBitString(int);
    let bin = [];
    binString.split('').forEach((bit, index) => {
      bin[index] = parseInt(bit);
    })
    return bin;
  }

  binArrayToInt(array){
    let int = 0;
    array.reverse();
    array.forEach((bit, index) => {
      int += bit*Math.pow(2, index);
    })
    return int;
  }

  getSum() {
    return this.binArrayToInt(this.sumBinary);
  }
}