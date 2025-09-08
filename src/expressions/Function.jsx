import React from "react";

const ChildFunction = ({ onButtonCLick }) => {
  return (
    <div>
      <button onClick={onButtonCLick} className="border">
        CHild Button Click
      </button>
    </div>
  );
};

const Function = () => {
  const handleClick = () => {
    <p>Button Clicked</p>;
    alert("Button Clicked in Child, Handled by Parent");
  };

  return <ChildFunction onButtonCLick={handleClick} />;
};

export default Function;
