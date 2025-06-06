const crypto = require("crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Password-Based Key Derivation Function 2
// Synchronous function block the main thread - avoid using them
const key = crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("Key is generated synchronously", key);

setTimeout(() => {
  console.log("call me right now");
}, 0);

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Key is generated asynchronously", key);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplcation result is : ", c);
