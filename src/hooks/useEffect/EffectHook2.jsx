import React, { useState, useEffect } from "react";

const EffectHook2 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  useEffect(() => {
    console.log("State Change Detected, useEffect Hook Re-rendered");
  }, [a, b]);

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={() => setA(a + 1)}
        className="flex flex-col justify-center items-center mb-10 px-2 py-1 bg-gray-600 text-white rounded border border-red-500"
      >
        Increment A
      </button>
      <button
        onClick={() => setB(b + 2)}
        className="flex flex-col justify-center items-center mb-10 px-2 py-1 bg-gray-600 text-white rounded border border-red-500"
      >
        Increment B
      </button>

      <button
        onClick={() => setC(c + 3)}
        className="flex flex-col justify-center items-center mb-10 px-2 py-1 bg-gray-600 text-white rounded border border-red-500"
      >
        Increment C
      </button>

      <p className="flex flex-col justify-center items-center mb-10 px-2 py-1 bg-gray-600 text-white rounded border border-red-500">
        Counter A Incremented: {a}{" "}
      </p>
      <p className="flex flex-col justify-center items-center mb-10 px-2 py-1 bg-gray-600 text-white rounded border border-red-500">
        Counter B Incremented: {b}{" "}
      </p>
      <p className="flex flex-col justify-center items-center px-2 py-1 bg-gray-600 text-white rounded border border-red-500">
        Counter C Incremented: {c}{" "}
      </p>
    </div>
  );
};

export default EffectHook2;
