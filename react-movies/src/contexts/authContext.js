import React, { useState, createContext } from "react";
import { login, signup } from "../api/tmdb-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [openDialog, setOpenDialog] = useState(false); // 控制对话框是否打开

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    console.log(result)
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }else{
      setErrorMsg(result.msg);
      setOpenDialog(true);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result);
    if (result.code != 201) { setErrorMsg(result.msg); setOpenDialog(true); }
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
        errorMsg,
        openDialog,
        setOpenDialog
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;