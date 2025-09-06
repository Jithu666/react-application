import React from "react";

const ConditionalRendering = () => {
  const isRendered = false;

  const items = ["Apple", "Banana", "Cherry"];
  return (
    // <div>{isRendered ? <h1>Welcome Back</h1> : <h1>Please Login</h1>}</div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ConditionalRendering;
