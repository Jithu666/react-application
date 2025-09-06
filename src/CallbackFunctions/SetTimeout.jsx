import React, { useState } from "react";

const SetTimeout = () => {
  const [message, setMessage] = useState("");

  const handleSetTimeout = () => {
    setMessage("Processing");
    console.log("Processing");
    setTimeout(() => {
      setMessage("Processing Completed");
      console.log("Processing Completed");
    }, 3000);
  };

  return (
    <div>
      <p>Message: {message}</p>
      <button onClick={handleSetTimeout}>Handle SetTimeout</button>
    </div>
  );
};

export default SetTimeout;
