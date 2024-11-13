import React from 'react'
import { useState } from 'react';
import './signIn.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const[loading,setLoading]=useState(false)
  const[wrongID,setwrongID]=useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const [signInInfo,setsignInInfo]= useState({
        username: "",
        password: ""
    })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login',new URLSearchParams({
        'username': signInInfo.username,
        'password': signInInfo.password
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data)
      localStorage.setItem("token", response.data.access_token);
			window.location = "/courses";
      
    } catch (error) {
      console.error(error)
      console.log(signInInfo)
      setwrongID(true)
      
    }finally{
      setLoading(false)
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
        {wrongID&&<div className='wrong-id'><i> *Wrong username or password! </i></div>}
        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        {loading? (<div className='sign_in_loading'><i class="fa-solid fa-spinner fa-spin"></i></div>):<button type="submit" className="login-button">Sign In</button> }
        
      </form>
      <a href="#" className="forgot-password">Forgot your password?</a>
      <p className="switch-form">
        Don't have an account? <Link to="/sign-up">Sign up now</Link>
      </p>



      
    </div>
  );
}

export default SignIn
