// episode05.js
// require('./path');
// when you require a module all the code of the module is wrapped inside a function(IIFE)

// IIFE - Immediately Invoked Function Expression

// (function (module, require, ...) {
// all the code from the module is wrapped inside this IIFE
// How are variables and functions private in a module?
// -> IIFE (wrapping code) and require (statement)
// How do you get access to module.exports
// -> NodeJS passes these parameters module, require, etc to the IIFE.
// })(module, require, ...);

// 5 step process when we require a file -> require('/path)
// 1. Resolving the module
// - whether it is a JS file or a node module or json file or a folder
// 2. Loads the file content
// 3. Wraps inside an IIFE (Compile step)
// 4. Evalution
// - module.exports - code is executed and module.exports is returned
// 5. Caching
// - module is cached

require("./episode05_xyz.js");
