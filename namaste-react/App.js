import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => return ReactElement i.e. JS Object => on rendering HTMLElement

const heading = React.createElement("h1", { id: "heading", key: "heading" }, "Hello World from React! 🚀");
console.log(heading);

// JSX - JavaScript syntax to help with React
// It is not HTML in JS
// It is HTML-like or XML-like syntax
// JS Engine will not understand this code as-is
// Parcel uses Babel package to transpile the code to JS before it reaches the JS Engine
// JSX Code => transpiled to React.createElement => return ReactElement i.e. JS Object => on rendering HTMLElement
const jsxHeading = <h1 id="heading" key="jsxHeading">Namaste React using JSX 🚀</h1>;
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
