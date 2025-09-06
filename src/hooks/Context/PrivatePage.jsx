import React, { useContext } from "react";
import { AuthContext1 } from "./AuthContext1";

const PrivatePage = () => {
  const { user, setUser, logout } = useContext(AuthContext1);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="p-6 bg-white border-2 border-black rounded w-1/3 text-center">
        <h2>Private Page</h2>

        <h2>{`Welcome ${user}`}</h2>

        <button
          className="bg-black text-white px-2 py-1 m-auto mt-2 rounded-md"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default PrivatePage;
