import React from 'react'
import { useState } from 'react';
import './signIn.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const [signInInfo,setsignInInfo]= useState({
        username: "",
        password: ""
    })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/token',new URLSearchParams({
        'username': signInInfo.username,
        'password': signInInfo.password
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data)
      localStorage.setItem("token", response.data.access_token);
			window.location = "/";
      
    } catch (error) {
      console.error(error)
      console.log(signInInfo)
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setsignInInfo({ ...signInInfo, [input.name]: input.value });
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <div className="input-group">
          <input type="text" id="username" onChange={handleChange} value={signInInfo.username} name="username" placeholder='Username' required />
        </div>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={handleChange}
            value={signInInfo.password}
            placeholder='Password'
            required
          />
          <span
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            👁
          </span>
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <a href="#" className="forgot-password">Forgot your password?</a>
      <p className="switch-form">
        Don't have an account? <Link to="/sign-up">Sign up now</Link>
      </p>
    </div>
  );
}

export default SignIn
