import React from "react";
import { useState } from "react";

const ToggleTheme = () => {
  const [dark, setDark] = useState(false);

  const styles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <p>{dark ? "Dark mode" : "Light Mode"}</p>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;
