import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (<h1 id="heading" className="heading" key="jsxHeading" tabIndex={5}>Namaste React using JSX 🚀</h1>);

// React Component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component 🚀</h1>;
}

const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
