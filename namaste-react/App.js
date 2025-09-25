import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const title = (
  <h1 id="heading" className="heading" key="jsxHeading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// React Component Composition
// Even if we got title from an api or sth, JSX will sanitize its value, prevents Cross site scripting attack
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1>Namaste React Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
