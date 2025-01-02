import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import ErrorDialog from "../components/dialog" 


const SignUpPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const openDialog = context.openDialog
  
  const handleCloseDialog = () => {
    context.setOpenDialog(false); // 关闭对话框
  };

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  };

  if (registered === true) {
    return <Navigate to="/login" />;
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
        <h2 style={{ marginBottom: "20px", fontSize: "24px", color: "#ffeb3b" }}>Sign Up</h2>
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
        <input
          id="passwordAgain"
          type="password"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
          placeholder="Confirm Password"
          onChange={(e) => setPasswordAgain(e.target.value)}
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
          onClick={register}
        >
          Register
        </button>
        <p style={{ marginTop: "15px", color: "#ffeb3b" }}>
          Already have an account? <Link to="/login" style={{ color: "#ffeb3b", textDecoration: "none" }}>Back to Login</Link>
        </p>
      </div>
      <ErrorDialog open={openDialog} onClose={handleCloseDialog} message={context.errorMsg} />
    </div>
  );
};

export default SignUpPage;