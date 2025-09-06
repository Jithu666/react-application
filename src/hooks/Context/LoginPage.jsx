import { useContext } from "react";
import PrivatePage from "./PrivatePage";
import { AuthContext1 } from "./AuthContext1";

const LoginPage = () => {
  const handleLogin = () => {
    console.log("Login");
  };

  const {
    username,
    setUsername,
    password,
    setPassword,
    login,
    isAuthenticated,
  } = useContext(AuthContext1);

  return (
    <>
      <div className="flex justify-center items-center bg-gray-200 h-screen">
        <div className="p-6 bg-white border-2 border-black rounded w-1/3 text-center">
          <h1 className="text-xl mb-4">Login Page</h1>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Enter your User Name: "
              onChange={(e) => setUsername(e.target.value)}
              className="ml-2 border-2 border-black px-2 py-1
            "
            />
            <br /> <br />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your User Name : "
              className="ml-2 border-2 border-black px-2 py-1"
            />{" "}
            <br /> <br />
          </div>
          <button
            type="submit"
            onClick={login}
            className="bg-black text-white px-2 py-1"
          >
            Login
          </button>
        </div>
      </div>
      {/* <PrivatePage /> */}
    </>
  );
};

export default LoginPage;
