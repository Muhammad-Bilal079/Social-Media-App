import React, { useContext, useEffect, useRef } from 'react'
import './login.css'
import { loginCall } from "../../apiCalls"
import { AuthContext } from '../../context/AuthContext.jsx'
import { CircularProgress } from '@mui/material'

function Login() {
  const email = useRef()
  const password = useRef()
  const { user, isFetching, dispatch, error } = useContext(AuthContext);
  
  // const handleClick =  (e) => {
  //   e.preventDefault()
  //   loginCall( {email: email.current.value, password: password.current.value  }, dispatch)
  //   console.log(user);
  // }
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await loginCall({ email: email.current.value, password: password.current.value }, dispatch);
      console.log(response); // Response from loginCall
      console.log(user); // Updated user state
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mernify</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Mernify.
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input placeholder="Email" type='email' required ref={email} className="loginInput" />
            <input placeholder="Password" type='password' required ref={password} minLength='5' className="loginInput" />
            <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ? <CircularProgress color="success" size={30}/> : "Login"} </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? <CircularProgress color="success" size={30}/> : "Don't have an account?" }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login