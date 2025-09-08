import React from "react";

const ChildFunction = ({ val1, val2 }) => {
  const sum = val1 + val2;
  console.log("Addition Function");
  return (
    <div>
      {val1} + {val2} = {sum};
    </div>
  );
};

const FunctionCall = () => {
  const val1 = 10090;
  const val2 = 12091;

  return (
    <div>
      <ChildFunction val1={val1} val2={val2} />
    </div>
  );
};

export default FunctionCall;
