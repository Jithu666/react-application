import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { NameContext, ThemeContext1, CounterContext } from "./CreateContext";

const ComponentC = () => {
  const { name, setName } = useContext(NameContext);
  const { primaryColor, fontSize } = useContext(ThemeContext1);
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="border-3 border-gray-600 m-10 p-10">
      <p>THis is Component C -&gt;, this is nested inside Component B </p>
      <h2
        className="text-black light:text-black opacity-100"
        style={{ color: primaryColor, fontSize }}
      >
        Name: {name}
      </h2>
      <button onClick={() => setName("Jithendra")} className="border-2">
        Click Me
      </button>

      <ComponentD />

      <h4>Count: {count}</h4>
      <button
        className="border-2 border-black rounded-lg p-2 flex justofy-center items-center"
        onClick={() => setCount(count + 1)}
      >
        Set Count
      </button>
    </div>
  );
};

export default ComponentC;
