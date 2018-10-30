import { expect } from 'chai';
import { HalfAdder } from '../src/components/halfAdder';
import { FullAdder } from '../src/components/fullAdder';
import { FourBitRippleCarryAdder } from '../src/components/fourBitRippleCarryAdder';

const halfAdderLogicHash = [
  {a: 0, b: 0, c: 0, s: 0},
  {a: 1, b: 0, c: 0, s: 1},
  {a: 0, b: 1, c: 0, s: 1},
  {a: 1, b: 1, c: 1, s: 0},
];

const fullAdderLogicHash = [
  {a: 0, b: 0, cin: 0, cout: 0, s: 0},
  {a: 0, b: 0, cin: 1, cout: 0, s: 1},
  {a: 0, b: 1, cin: 0, cout: 0, s: 1},
  {a: 0, b: 1, cin: 1, cout: 1, s: 0},
  {a: 1, b: 0, cin: 0, cout: 0, s: 1},
  {a: 1, b: 0, cin: 1, cout: 1, s: 0},
  {a: 1, b: 1, cin: 0, cout: 1, s: 0},
  {a: 1, b: 1, cin: 1, cout: 1, s: 1},
];

function generateFourBitLogicHash() {
  let array = [];
  for (let a = 0; a < 16; a++) {
    for (let b = 0; b < 16; b++) {
      array.push({a: a, b: b, sum: a+b});
    }
  }
  return array;
}

const fourBitAdderLogicHash = generateFourBitLogicHash();



describe('halfAdder', () => {
  it('should calculate logic table correctly', (done) => {
    for(let combination of halfAdderLogicHash){
      const halfAdder = new HalfAdder(combination.a, combination.b);
      expect(halfAdder.getSum()).to.equal(!!combination.s);
      expect(halfAdder.getCarry()).to.equal(!!combination.c);
    }
    done();
  })
});

describe('fullAdder', () => {
  it('should calculate logic table correctly', (done) => {
    for (let combination of fullAdderLogicHash) {
      const fullAdder = new FullAdder(combination.a, combination.b, combination.cin);
      expect(fullAdder.getSum()).to.equal(!!combination.s);
      expect(fullAdder.getCarry()).to.equal(!!combination.cout);
    }
    done();
  })
});

describe('fourBitRippleCarryAdder', () => {
  it('should calculate logic table correctly', (done) => {
    for (let combination of fourBitAdderLogicHash) {
      const fourBitAdder = new FourBitRippleCarryAdder(combination.a, combination.b);
      expect(fourBitAdder.getSum()).to.equal(combination.sum);
    }
    done();
  })
})