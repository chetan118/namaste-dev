import React from "react";
import ReactDOM from "react-dom/client";

// React Component
const Title = () => (
  <h1 id="heading" className="heading" key="jsxHeading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// React Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namaste React Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
