import { And } from './and';
import { Xor } from './xor';

export class HalfAdder {
  constructor(augend, addend) {
    this.sum = new Xor(augend, addend).getOutput();
    this.carry = new And(augend, addend).getOutput();
  }

  getSum() {
    return this.sum;
  }

  getCarry() {
    return this.carry;
  }
}