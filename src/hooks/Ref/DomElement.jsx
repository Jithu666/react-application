import React, { useRef } from "react";

const DomElement = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleClick2 = () => {
    inputRef2.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="click button to focus me"
      />{" "}
      <br />
      <button onClick={handleClick}>Focus input</button>
      <br />
      <br />
      <input
        type="text"
        ref={inputRef2}
        placeholder="CLick button 2to focus on me"
      />{" "}
      <br />
      <button onClick={handleClick2}>Focus on me</button>
    </div>
  );
};

export default DomElement;
