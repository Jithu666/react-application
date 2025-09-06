import React from "react";

const Child = ({ onButtonClick }) => {
  return <button onClick={onButtonClick}>Child Clicked a Button</button>;
};

const PassingData = () => {
  const handleButtonClick = () => {
    console.log("Child Clicked the button");
  };

  return (
    <div>
      <Child onButtonClick={handleButtonClick} />
    </div>
  );
};

export default PassingData;
