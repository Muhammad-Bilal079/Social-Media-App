import React, { useRef } from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Register() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const navigat = useNavigate()

  const handleClick = async(e) => {
    e.preventDefault()
    
    if(password.current.value !== passwordAgain.current.value){
     alert('password not matched !')
    }else{
      const user ={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      }

      try {
         const res = await axios.post(' http://localhost:5000/api/auth/register',user)
         navigat('/login')
      } catch (error) {
        console.log(error);
      }
    }
   
  }

    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Mernify</h3>
              <span className="loginDesc">
                Connect with friends and the world around you on Lamasocial.
              </span>
            </div>
            <div className="loginRight">
              <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Username"  required  ref={username}  className="loginInput" />
                <input placeholder="Email" type='email'required  ref={email}  className="loginInput" />
                <input placeholder="Password" type='password'  required  ref={password} min={5} className="loginInput" />
                <input placeholder="Password Again" type='password'  required min={5} ref={passwordAgain}  className="loginInput" />
                <button className="loginButton" type='submit'>Sign Up</button>
                <button className="loginRegisterButton" >
                  Log into Account
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Register