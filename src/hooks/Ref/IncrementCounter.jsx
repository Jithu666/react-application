import React from "react";
import { useRef, useState } from "react";

const IncrementCounter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Renders: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment COunter</button>
    </div>
  );
};

export default IncrementCounter;
