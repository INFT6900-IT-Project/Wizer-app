import React from 'react'
import { useState } from 'react';
import './signIn.css'
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email or username*</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password*</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
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
    </div>
  );
}

export default SignIn
