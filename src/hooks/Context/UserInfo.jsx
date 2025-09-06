import React from "react";
import { useAuth } from "./AuthContext";

const UserInfo = () => {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button
            onClick={() => {
              login({ name: "Jithu", email: "Jithu2example.com" });
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserInfo;
