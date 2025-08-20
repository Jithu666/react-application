const Greet = (props) => {
  const { name = "Jithu" } = props;

  return (
    <div className="Greet">
      <h2>Hello, {name}</h2>
    </div>
  );
};

export default Greet;
