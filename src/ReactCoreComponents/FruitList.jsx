import React from "react";

const Map = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
    "Elephant Foot",
    "Fig",
    "Guava",
    "Ham",
    "Ice Apple",
  ];
  return (
    <div className="px-3">
      <h2>Fruits are:</h2> <br />
      <ul className="list-none m-auto px-2">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
