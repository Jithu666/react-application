import React from "react";

const GrandChild = ({ user }) => {
  const { name, role } = user;
  return (
    <div>
      <p>
        Hello {name}, you are a {role}
      </p>
    </div>
  );
};

export default GrandChild;
