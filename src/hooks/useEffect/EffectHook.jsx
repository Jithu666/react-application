import React, { useState, useEffect } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Runs after every Render, cause no dependency array.", count);
  });

  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <p>Runs after every Render, cause no dependency array {count}</p>
      <button
        className="mt-2 border px-2 py-1 ml-4"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
    </div>
  );
};

export default EffectHook;
