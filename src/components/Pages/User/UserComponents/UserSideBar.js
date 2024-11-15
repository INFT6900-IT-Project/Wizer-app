import React from "react";
import "./UserSideBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext"; // Adjust the path based on your folder structure

function UserSideBar() {
  const { permissions } = useAuth();

  return (
    <div className="sidebar">
      <div className="ad-user-sidebar-wrap">
        

        {/* Conditionally render Admin Dashboard link if user has Admin permission */}
        {(permissions == "Admin")?(<div>
          <Link
          to="/user-screen/account-settings"
          style={{ textDecoration: "none" }}
        >
          <p>
            <i className="fa-solid fa-gear"></i> Account Settings
          </p>
        </Link>

          <Link
            to="/user-screen"
            style={{ textDecoration: "none" }}
          >
            <p>
              <i className="fa-solid fa-user-shield"></i> Admin Dashboard
            </p>
          </Link></div>):(
          <div>
          <Link to="/user-screen/achievement" style={{ textDecoration: "none" }}>
            <p>
              <i className="fa-solid fa-trophy"></i> Achievements
            </p>
          </Link>
  
          <Link to="/user-screen/reminder" style={{ textDecoration: "none" }}>
            <p>
              <i className="fa-solid fa-bell"></i> Reminder
            </p>
          </Link>
  
          <Link
            to="/user-screen/saved-courses"
            style={{ textDecoration: "none" }}
          >
            <p>
              <i className="fa-solid fa-bookmark"></i> Saved Courses
            </p>
          </Link>
  
          <Link to="/user-screen/progress" style={{ textDecoration: "none" }}>
            <p>
              <i className="fa-solid fa-chart-line"></i> Progress
            </p>
          </Link>
  
          <Link to="/user-screen/help-center" style={{ textDecoration: "none" }}>
            <p>
              <i className="fa-regular fa-circle-question"></i> Help Center
            </p>
          </Link>
  
          <Link
            to="/user-screen/account-settings"
            style={{ textDecoration: "none" }}
          >
            <p>
              <i className="fa-solid fa-gear"></i> Account Settings
            </p>
          </Link></div>

        )}
      </div>
    </div>
  );
}

export default UserSideBar;
