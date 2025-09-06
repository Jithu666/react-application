import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div className="border-3 border-gray-600 m-10 p-10">
      <p>THis is Component B -&gt; This is nested inside COmponent A. </p>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
