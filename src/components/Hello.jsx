import React from "react";

// const Hello = (props) => {
// Destructuring Props
// const Hello = ({ name, char }) => {
const Hello = (props) => {
  const { name = "Visitor", char = "SuperHuman" } = props;
  return (
    <div>
      <h1>
        {/* Hello {props.name} a.k.a {props.char} */}
        Hello {name} a.k.a {char}
      </h1>
    </div>
  );

  //   return React.createElement("div", null, "Hello Mahesh");

  // return React.createElement(
  //   "div",
  //   { id: "Hello", className: "DummyClass" },
  //   React.createElement("h1", null, "Hello Mahesh")
  // );
};

export default Hello;
