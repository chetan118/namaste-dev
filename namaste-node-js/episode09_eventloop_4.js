/**
 * Expected Output
 *
 * Last line of the file
 * process.nextTick
 * inner nextTick
 * Promise
 * Timer expired
 * setImmediate
 * File Reading CB
 */
const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => console.log("File Reading CB"));

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("process.nextTick");
});

console.log("Last line of the file");
