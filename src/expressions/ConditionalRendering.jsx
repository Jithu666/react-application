import React from "react";

const ConditionalRendering = ({ isLoggedIn }) => {
  return (
    <div>
      <h1>User Login</h1>
      {isLoggedIn ? <p>User Logged In</p> : <p>User Not Logged IN</p>}
    </div>
  );
};

export default ConditionalRendering;
