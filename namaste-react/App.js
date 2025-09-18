import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "key1" }, [
    React.createElement("h1", { key: "key11" }, "This is an H1 tag"),
    React.createElement("h2", { key: "key12" }, "This is an H2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "key2" }, [
    React.createElement("h1", { key: "key21" }, "This is an H1 tag"),
    React.createElement("h2", { key: "key22" }, "This is an H2 tag"),
  ]),
]);
console.log(parent); // this is an object <ReactElement>
const root = createRoot(document.getElementById("root"));
root.render(parent);
