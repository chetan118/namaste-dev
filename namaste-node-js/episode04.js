// episode04.js
// Modules protect their variables and methods from leaking

// cjs
const {
  x,
  calculateSum,
  calculateMultiplication,
} = require("./episode04_calculate");

// mjs
// import {
//   x,
//   calculateSum,
//   calculateMultiplication,
// } from "./episode04_calculate/index_mjs.js";

const data = require("./episode04_data.json");
console.log("episode04.js");

// works with cjs since it runs in non-strict mode
// will fail in mjs since it runs in strict mode
var a = 4;
const b = 5;

const sum = calculateSum(a, b);
console.log(sum);

const mul = calculateMultiplication(a, b);
console.log(mul);

console.log(x);

console.log(data);
