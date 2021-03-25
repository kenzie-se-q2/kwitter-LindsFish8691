import React, { useState, useEffect } from "react";
import { loginRequest, googleLoginRequest } from "../fetchRequests";
import { Link } from "react-router-dom";
import { LOGIN, useStore } from "../store/store";
// import GoogleLogin from "react-google-login";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const user = useStore((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) => {
      dispatch({ type: LOGIN, payload: userData });
      window.localStorage.setItem("user", JSON.stringify(userData));
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };
  
  // const clientId = clientId;

  useEffect(()=>{
    window.addEventListener('message', handleMessage)
    return ()=>{
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  function handleMessage(e){
    console.log(e)
  }

  function handleGoogleLogin(e){
    window.open(googleLoginRequest) 
  }
  // "https://kwitter-api-b.herokuapp.com/auth/google/login"


  return (
    <>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={formData.username} autoFocus required onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} required onChange={handleChange} />
        <button type="submit">Login</button>
        <br></br>
        <div>{user.message ? user.message : ""}</div>

        {/* <GoogleLogin
        // clientId={clientId}
        /> */}

        <button onClick={handleGoogleLogin}>Google Login</button>
        <br></br>
        <label>
          New User?
          <Link to="/registration">Click here!</Link>
        </label>
      </form>
    </>
  );
}

export default Login;
