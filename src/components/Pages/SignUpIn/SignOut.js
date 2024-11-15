import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignOut.css";
import { useAuth } from "../../../context/AuthContext";

function SignOut() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const cancelSignOut = () => {
    navigate(-1); // Cancel sign out choice and move to previous page
  };

  return (
    <div className="overlay">
      <div className="dialog-box">
        <p>Are you sure you want to sign out?</p>
        <div className="signout-btn-wrap">
          <button onClick={signOut}>Yes</button>
          <button onClick={cancelSignOut}>No</button>
        </div>
      </div>
    </div>
  );
}

export default SignOut;
