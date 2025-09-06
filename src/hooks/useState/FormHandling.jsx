import React from "react";
import { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandling;
