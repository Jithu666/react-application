import React, { useContext } from "react";
import {
  CounterContext,
  TextContext,
  ValueContext,
  NameContext,
} from "./CreateContext";

const ComponentD = () => {
  const { count, setCount } = useContext(CounterContext);
  const { text, setText } = useContext(TextContext);
  const value = useContext(ValueContext);

  const { name, setName } = useContext(NameContext);

  return (
    <div className="border-3 border-gray-600 m-10 p-10">
      <p>This is Component D, this is inside Component C</p>
      <button className="" onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>
      <p>Count is {count}</p>
      <button
        onClick={() =>
          setText("This component is nested deep inside App component")
        }
      >
        Update Text
      </button>
      <div className="text-black font-extrabold text-4xl">{text}</div>
      <div>
        <h1>Value: {value}</h1>
      </div>
      <div>{`Name: ${name}`}</div>
      <button onClick={() => setName("Janardhan")}>
        Button On CLick Set Name{" "}
      </button>
    </div>
  );
};

export default ComponentD;
