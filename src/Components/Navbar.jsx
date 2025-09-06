import React from "react";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="p-4 bg-gray-200">
      <div>
        {isAuthenticated ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <span>Please Log In</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
