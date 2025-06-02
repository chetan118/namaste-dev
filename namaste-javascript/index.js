// thisKeyword.js
// "use strict";

// this in global space
console.log(this); // globalObject - in browser "window", in nodejs "global", different in different JREs

// this inside a function
function x() {
  // the value depends on strict / non strict mode
  console.log(this);
}
x();

// this inside non-strict mode - (this substitution)

// if the value of this keyword is undefined or null
// this will be replaced with globalObject
// only in non strict mode

// this keyword value depends on how the function is called (window)

x(); // strict mode - undefined
window.x(); // strict mode - Window

// this inside an object's method

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x();

// call apply bind methods (sharing methods)
const student1 = {
  name: "Akshay",
  printName: function () {
    console.log(this.name);
  },
};

student1.printName();

const student2 = {
  name: "Deepika",
};

// CALL
student1.printName.call(student2);

// APPLY
// METHOD

// this inside arrow function
// - don't provide their own this binding
// - this keyword behaves like value of enclosing lexical context

const objA = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
objA.x(); // window

// this inside nested arrow function

const objB = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
objB.x(); // {a: 20, x: f}

// this inside DOM elements
// - reference to the HTML element

// this inside class, constructor, etc
