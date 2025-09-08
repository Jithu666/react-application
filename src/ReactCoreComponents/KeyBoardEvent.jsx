import React, { useState } from "react";

const KeyBoardEvent = () => {
  const [text, setText] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`you entered text: ${text}`);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Escape") {
      console.log("Key released");
      alert("You just released a key");
    }
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="Enter any text"
        className="border mb-10"
      />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="'Enter any text"
        onKeyUp={handleKeyUp}
        className="border mb-10"
      />

      <button onClick={handleReset}>Clear Text</button>
    </div>
  );
};

export default KeyBoardEvent;
