import React from "react";
import { useState } from "react";

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide " : "Show "}Message
      </button>
      {isVisible && <p>I am Visible now.</p>}
    </div>
  );
};

export default ToggleVisibility;
