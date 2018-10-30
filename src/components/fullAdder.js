import { HalfAdder } from './halfAdder';
import { Or } from './or';

export class FullAdder {
  constructor(a, b, cin) {
    let halfAdderA = new HalfAdder(a,b);
    let halfAdderB = new HalfAdder(halfAdderA.getSum(), cin);
    this.sum = halfAdderB.getSum();
    this.carry = new Or(halfAdderA.getCarry(), halfAdderB.getCarry()).getOutput();
  }

  getSum() {
    return this.sum;
  }

  getCarry() {
    return this.carry;
  }
}