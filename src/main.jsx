import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import { AuthProvider } from "./hooks/Context/AuthContext";
// import UserInfo from "./hooks/Context/UserInfo";
import { AuthProvider1 } from "./hooks/Context/AuthContext1";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuthProvider1>
      <App />
    </AuthProvider1>
    {/* <AuthProvider> */}
    {/* <UserInfo /> */}
    {/* </AuthProvider> */}
  </StrictMode>
);
