export class Nand {
  constructor(input1, input2) {
    this.output = !(!!input1 && !!input2);
  }

  getOutput() {
    return this.output;
  }
}