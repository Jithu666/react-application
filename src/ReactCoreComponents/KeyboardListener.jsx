import React, { useState } from "react";

const KeyboardListener = () => {
  const [value, setValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.code === "KeyA") {
      console.log("Capital A pressed");
    }
  };

  const handleKeyDownCapture = (event) => {
    if (event.code === "KeyJ") {
      console.log("Key J Pressed");
    }
  };

  const handleKeyDownEvent = (event) => {
    if (event.shiftKey) {
      console.log("Shift Key was Pressed.");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {/* <input
        type="text"
        className="border mb-10"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Caps A"
        onKeyDown={handleKeyDown}
        onKeyDownCapture={handleKeyDownCapture}
      /> */}
      {/* <div
        onKeyDown={() => console.log("Div bubling")}
        onKeyDownCapture={() => console.log("Div Capturing")}
        onKeyUp={() => console.log("DIV bubling")}
        onKeyUpCapture={() => console.log("Div Capturing")}
        tabIndex={0}
      > */}
      {/* <input
          type="text"
          className="border"
          placeholder="Press any key."
          onKeyDown={() => console.log("Input Bubling")}
          onKeyDownCapture={() => console.log("Input Capturing")}
          onKeyUp={() => console.log("Input bubling")}
          onKeyUpCapture={() => console.log("Input Capturing")}
        /> */}
      {/* </div> */}

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Modifier Keys"
        onKeyDown={handleKeyDownEvent}
        className="border"
      />
    </div>
  );
};

export default KeyboardListener;
