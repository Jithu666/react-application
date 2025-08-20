const ChildComponent = (props) => {
  return (
    <div className="">
      <button onClick={() => props.greetHandler("ChildComponent")}>
        Greet Parent
      </button>
    </div>
  );
};

export default ChildComponent;
