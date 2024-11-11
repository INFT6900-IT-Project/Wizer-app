import React from 'react'
import { useState } from 'react';
import './signIn.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [signUpInfo, setsignUpInfo] = useState(
    {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""

    }
  );

  const handleSubmit = async(e)=> {
    e.preventDefault();
  try{const response= await axios.post('http://127.0.0.1:8000/register',signUpInfo)
    console.log(response.data)
  }catch(error){
    console.error(error)
    console.log(signUpInfo)
  }

  }
  
  const handleChange = ({ currentTarget: input }) => {
    setsignUpInfo({ ...signUpInfo, [input.name]: input.value });
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" id="username" onChange={handleChange} value={signUpInfo.username} name="username" placeholder='Username' required />
        </div>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={handleChange}
            value={signUpInfo.password}
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
        <div className="input-group">
          <input type="text" id="first_name" name="first_name" onChange={handleChange} value={signUpInfo.first_name} placeholder='First name' required />
        </div>
        <div className="input-group">
          <input type="text" id="last_name" name="last_name" onChange={handleChange} value={signUpInfo.last_name} placeholder='Last name' required />
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" onChange={handleChange} value={signUpInfo.email} placeholder='Email address' required />
        </div>

        <button type="submit" className="login-button">Sign Up</button>
      </form>
      <a href="#" className="forgot-password">Forgot your password?</a>
      <p className="switch-form">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp
