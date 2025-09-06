import React, { useState } from "react";

const InputChange = () => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={handleInput} />
        <p>you entered: {text}</p>
      </form>
    </div>
  );
};

export default InputChange;
