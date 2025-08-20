const FunctionClick = () => {
  const handleClickEvent = () => {
    console.log("Mouse Click Event");
  };

  return (
    <div className="mouseClick">
      <button onClick={handleClickEvent}>Click Me</button>
    </div>
  );
};

export default FunctionClick;
