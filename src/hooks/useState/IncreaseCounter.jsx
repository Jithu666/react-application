import React from "react";
import { useState } from "react";

const IncreaseCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Click Me</button>
      <p>You clicked the button {count} times.</p>
    </div>
  );
};

export default IncreaseCounter;
