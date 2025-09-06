import React, { use, useActionState, useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    const dummyUser = {
      name,
      email,
      token: "dummy-jwt-token",
      role: "user",
    };
    login(dummyUser);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className="border p-1 ml-2"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-1 ml-2"
      />
      <button onClick={handleLogin} className="ml-2 bg-blue-400 p-2 text-white">
        Log In
      </button>
    </div>
  );
};

export default Login;
