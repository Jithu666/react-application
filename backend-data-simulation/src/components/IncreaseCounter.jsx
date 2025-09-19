import React, { useState } from "react";

const IncreaseCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 3);
  };

  return (
    <div>
      <p className="ml-10">Count: {count}</p>
      <button onClick={incrementCount} className="ml-10 border ">
        Increment Count
      </button>
    </div>
  );
};

export default IncreaseCounter;
