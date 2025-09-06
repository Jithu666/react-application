import { createContext, useState } from "react";

export const AuthContext1 = createContext();

export const AuthProvider1 = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "jit") {
      setUser(username);
    }
  };

  const isAuthenticated = () => {
    if (user != null) return true;
    else return false;
  };

  const logout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
  };

  return (
    <AuthContext1.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
        login,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext1.Provider>
  );
};
