/**
 * Expected Output
 *
 * Last line of the file
 * process.nextTick
 * Promise
 * Timer expired
 * setImmediate
 * File reading CB
 * 2nd next tick
 * 2nd setImmediate
 * 2nd Timer expired
 */
const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Timer expired"), 0);

  process.nextTick(() => console.log("2nd next tick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File Reading CB");
});

process.nextTick(() => console.log("process.nextTick"));

console.log("Last line of the file");
