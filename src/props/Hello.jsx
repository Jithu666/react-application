import React from "react";

const Hello = (props) => {
  const { name = "Jithu", char = "SuperHero" } = props;
  return (
    <div>
      <p>
        Hello {name}
        <p>your character is {char}</p>
        <hr />
      </p>
    </div>
  );
};

export default Hello;
