import React from "react";

const ClickEvents = () => {
  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div>
      <h1>React Events</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickEvents;
