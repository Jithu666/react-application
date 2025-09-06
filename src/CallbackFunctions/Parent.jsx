import React from "react";

const Child = ({ onButtonClick }) => {
  return <button onClick={onButtonClick}>Click Me Child Button</button>;
};

const Parent = () => {
  const handleChildClick = () => {
    alert("Child told me it was clicked");
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child onButtonClick={handleChildClick} />
    </div>
  );
};

export default Parent;
