const fs = require("fs");
const https = require("https");

var file = fs.readFileSync("./episode07_file.txt", "utf-8");
console.log("Finished reading file synchronously", file);

console.log("Hello World");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");

  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./episode07_file.txt", "utf-8", (err, data) => {
  console.log("File Data: ", data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplcation result is : ", c);
