import React from "react";

const Child = ({ child }) => {
  const { name, age, role } = child;
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-2">
        Passing object as prop to Child Component from Parent Component.
      </h1>
      {name ? (
        <p>
          Hi {name}, i just got to know you are a great {role} at a such a young
          age of {age}
        </p>
      ) : (
        <p>
          Hello User!, <br /> Enter your Name and Age.
        </p>
      )}
    </div>
  );
};

export default Child;
