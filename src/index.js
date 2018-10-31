import { RippleCarryAdder } from './components/rippleCarryAdder';
let int1 = parseInt(process.argv[2]);
let int2 = parseInt(process.argv[3]);
if(int1 > 15 || int2 > 15) {
  console.log("Must provide two integers with value less than 16");
}
let adder = new RippleCarryAdder(int1, int2);
console.log("SUM: ", adder.getSum());