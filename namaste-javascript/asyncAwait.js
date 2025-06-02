const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p1 resolved"), 5000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p2 resolved"), 10000);
});

async function handlePromises() {
  p1Res = await p1;
  console.log("p1-res", p1Res);

  p2Res = await p2;
  console.log("p2-res", p2Res);

  return p1Res + " & " + p2Res;
}

hpRes = handlePromises();
console.log("hp-res", hpRes);

setTimeout(() => console.log("The End"), 7500);

/**
 * CONSOLE OUTPUT
 *
 * index.js:19 hp-res Promise {<pending>}
 * index.js:10 p1-res p1 resolved
 * index.js:21 The End
 * index.js:13 p2-res p2 resolved
 */
