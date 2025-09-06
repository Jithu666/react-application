import { useState } from "react";

const Addition = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(null);

  const performAddition = (e) => {
    e.preventDefault();
    const sum = Number(value1) + Number(value2);
    setResult(sum);
  };

  return (
    <div>
      <form onSubmit={performAddition}>
        <label htmlFor="value1">Enter Value 1:</label>
        <input
          type="number"
          id="value1"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="value2">Enter Value 2:</label>
        <input
          type="number"
          id="value2"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>

      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
};

export default Addition;
