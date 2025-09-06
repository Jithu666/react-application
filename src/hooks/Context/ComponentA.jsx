import React, { useState, useContext } from "react";
import ComponentB from "./ComponentB";
import { ThemeContext, ThemeContext1 } from "./CreateContext";

const ComponentA = () => {
  const [name, setName] = useState("Jithu");
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className="border-3 border-gray-600 m-10 p-10"
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#333",
      }}
    >
      <p>THis is Component A, THis is nested inside App</p>
      <h2>{`Hello ${name}`}</h2>
      <button onClick={() => setName("Jithendra")}>Set Name Button</button>
      <ComponentB />
      <h2>{`Hello ${name}`}</h2>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="border-2 rounded-lg p-2"
      >
        Set {theme === "light" ? "dark" : "light"} Mode
      </button>
    </div>
  );
};

export default ComponentA;
