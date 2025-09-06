import React, { useContext } from "react";
import { ThemeContext } from "./CreateContext";
import ComponentA from "./ComponentA";

const Child = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
      className="min-h-screen"
    >
      <p>THis is a Child Component</p>
      <p>Current Theme: {theme}</p>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="border-2 p-2 rounded-lg"
      >
        Set {theme === "light" ? "dark" : "light"} Mode
      </button>
      <ComponentA />
    </div>
  );
};

export default Child;
