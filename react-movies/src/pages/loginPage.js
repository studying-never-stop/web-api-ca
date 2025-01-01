import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";

const LoginPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  const location = useLocation();
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

  return (
    <div
      style={{
        backgroundColor: "#6a1b9a", // 紫色背景
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff", // 白色背景
          padding: "20px 30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          color: "#333",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "24px", color: "#ffeb3b" }}>Login</h2>
        <input
          id="username"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          id="password"
          type="password"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            backgroundColor: "#6a1b9a",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={login}
        >
          Log in
        </button>
        <p style={{ marginTop: "15px", color: "#ffeb3b" }}>
          Not Registered? <Link to="/signup" style={{ color: "#ffeb3b", textDecoration: "none" }}>Sign Up!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
