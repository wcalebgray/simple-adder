import { expect } from 'chai';
import { And } from '../src/components/and';
import { Nand } from '../src/components/nand';
import { Or } from '../src/components/or';
import { Xor } from '../src/components/xor';

describe('and gate', () => {
  describe('should return true', () => {
    it('when both inputs are true', (done) => {
      const and = new And(true, true);
      expect(and.getOutput()).to.be.true;
      done();
    })
  })
  describe('should return false', () => {
    it('when the first input is false and the second is true', (done) => {
      const and = new And(false, true);
      expect(and.getOutput()).to.be.false;
      done();
    })
    it('when the first input is true and the second is false', (done) => {
      const and = new And(true, false);
      expect(and.getOutput()).to.be.false;
      done();
    })
    it('when both inputs are false', (done) => {
      const and = new And(false, false);
      expect(and.getOutput()).to.be.false;
      done();
    })
  })
});

describe('nand gate', () => {
  describe('should return true', () => {
    it('when the first input is false and the second is true', (done) => {
      const nand = new Nand(false, true);
      expect(nand.getOutput()).to.be.true;
      done();
    })
    it('when the first input is true and the second is false', (done) => {
      const nand = new Nand(true, false);
      expect(nand.getOutput()).to.be.true;
      done();
    })
    it('when both inputs are false', (done) => {
      const nand = new Nand(false, false);
      expect(nand.getOutput()).to.be.true;
      done();
    })
  })
  describe('should return false', () => {
    it('when both inputs are true', (done) => {
      const nand = new Nand(true, true);
      expect(nand.getOutput()).to.be.false;
      done();
    })
  })
});

describe('or gate', () => {
  describe('should return true', () => {
    it('when both inputs are true', (done) => {
      const or = new Or(true, true);
      expect(or.getOutput()).to.be.true;
      done();
    })
    it('when the first input is false and the second is true', (done) => {
      const or = new Or(false, true);
      expect(or.getOutput()).to.be.true;
      done();
    })
    it('when the first input is true and the second is false', (done) => {
      const or = new Or(true, false);
      expect(or.getOutput()).to.be.true;
      done();
    })
  })
  describe('should return false', () => {
    it('when both inputs are false', (done) => {
      const or = new Or(false, false);
      expect(or.getOutput()).to.be.false;
      done();
    })
  })
});

describe('xor gate', () => {
  describe('should return true', () => {
    it('when the first input is false and the second is true', (done) => {
      const xor = new Xor(false, true);
      expect(xor.getOutput()).to.be.true;
      done();
    })
    it('when the first input is true and the second is false', (done) => {
      const xor = new Xor(true, false);
      expect(xor.getOutput()).to.be.true;
      done();
    })
  })
  describe('should return false', () => {
    it('when both inputs are true', (done) => {
      const xor = new Xor(true, true);
      expect(xor.getOutput()).to.be.false;
      done();
    })
    it('when both inputs are false', (done) => {
      const xor = new Xor(false, false);
      expect(xor.getOutput()).to.be.false;
      done();
    })
  })
});
