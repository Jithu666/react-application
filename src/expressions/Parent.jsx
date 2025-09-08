import React from "react";

const Parent = ({ child }) => {
  const { name, age, role } = child;
  return (
    <div className="flex flex-col justify-center items-center m-auto px-2 py-2 bg-amber-50 text-black border-b shadow-xl">
      <h1>Conditional Rendering by passing props</h1>
      {name ? (
        <div className="text-center">
          <p>
            Hello {name} you are {age} years old.
          </p>
          <p>I just heard you are working as a {role}</p>
        </div>
      ) : (
        <p>Hello Guest</p>
      )}
    </div>
  );
};

export default Parent;
