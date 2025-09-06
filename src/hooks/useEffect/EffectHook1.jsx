import React, { useState, useEffect } from "react";

const EffectHook1 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    console.log("Resized to :", window.innerWidth);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("Use Effect Hook runs once on mount.");

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Cleanup runs on Un-Mount.");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Window Width: {width}</h2>
    </div>
  );
};

export default EffectHook1;
