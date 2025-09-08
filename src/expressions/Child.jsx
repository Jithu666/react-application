import React from "react";

const Child = ({ name = "Guest", age, role = "Visitor" }) => {
  //   const { name, age, role } = child;
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 border-b shadow-2xl mb-1">
      <h1 className="mb-2">
        Passing object as prop to Child Component from Parent Component.
      </h1>
      {name && name !== "Guest" ? (
        <p>
          Hi {name}, i just got to know you are a great {role} at a such a young
          age of {age}
        </p>
      ) : (
        <p>
          Hey {name} you have been alloted a {role} pass.
        </p>
      )}
    </div>
  );
};

export default Child;
