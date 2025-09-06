import React from "react";

const Parent = ({ name }) => {
  return (
    <div className="flex flex-col justify-center items-center m-auto px-2 py-2 bg-amber-50 text-black border-b shadow-xl">
      <h1>Conditional Rendering by passing props</h1>
      {name ? <p>Hello {name}</p> : <p>Hello Guest</p>}
    </div>
  );
};

export default Parent;
