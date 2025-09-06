import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Function
  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      count
      <p>{count}</p>
      <button onClick={handleIncreaseCount}>Increase Counter</button>
      <button onClick={handleResetCounter} style={{ marginLeft: "10px" }}>
        Reset Counter
      </button>
    </div>
  );
};

export default Counter;
