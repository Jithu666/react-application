import React, { useState } from "react";

const SubFunction = ({ num1, num2 }) => {
  return (
    <div>
      <p>Sum is : {num1 + num2}</p>
    </div>
  );
};

const FunctionCallUserInput = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="">
        Enter Value 1:
        <input
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          className="border rounded focus:border-orange-400 px-2 py-2 mb-2"
        />
      </label>
      <label htmlFor="">
        Enter Value 2:
        <input
          type="text"
          value={value2}
          placeholder="Enter 2nd Value"
          onChange={(e) => setValue2(e.target.value)}
          className="border rounded focus:border-orange-400 px-2 py-2 mb-2"
        />
      </label>

      <SubFunction num1={Number(value1)} num2={Number(value2)} />
    </div>
  );
};

export default FunctionCallUserInput;
