import React from "react";

const BasicExpressions = () => {
  const name = "Jithendra";
  const age = 23;

  return (
    <div className="m-auto p-2">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {/* Math Expression */}
      <p> Addition of 2 + 2 = {2 + 2}</p>
      <p> Subtraction of 2 - 19802 = {2 - 19802}</p>
      <p> Multiplication of 133 * 78 = {133 * 78}</p>
      <p> Division of 133 / 61.5 = {133 / 61.5}</p>
      <p> Modulo of 9 % 5 = {9 % 5}</p>
    </div>
  );
};

export default BasicExpressions;
