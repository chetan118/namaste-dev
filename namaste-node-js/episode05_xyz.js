console.log("exports", exports);
console.log("require", require);
console.log("module", module);
console.log("filename", __filename);
console.log("dirname", __dirname);

// these variable exports, require, module, __filename and __dirname are passed in by nodejs to the IIFE
// following code is from the node repo -> https://github.com/nodejs/node/blob/main/lib/internal/modules/cjs/loader.js#L345
/**
 * Add the CommonJS wrapper around a module's source code.
 * @param {string} script Module source code
 */
/*
let wrap = function(script) { // eslint-disable-line func-style
  return Module.wrapper[0] + script + Module.wrapper[1];
};

const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});',
];
*/
