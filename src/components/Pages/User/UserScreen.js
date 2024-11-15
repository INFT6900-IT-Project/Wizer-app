import React from "react";
import "./UserScreen.css";
import UserHome from "./UserComponents/UserHome";
import UserSideBar from "./UserComponents/UserSideBar";
import { Routes, Route } from "react-router-dom";
import Courses from "../CourseDetails/Courses";
import UserAchievement from "./UserComponents/UserAchievement";
import MyLearning from "./UserComponents/MyLearning";
import UserReminder from "./UserComponents/UserReminder";
import UserSavedCourses from "./UserComponents/UserSavedCourses";
import UserProgress from "./UserComponents/UserProgress";
import UserAccountSettings from "./UserComponents/UserAccountSettings";
import UserHelpCenter from "./UserComponents/UserHelpCenter";
import AdminDashboard from "../AdminPortal/AdminDashboard";

function UserScreen() {
  return (
    <div>
      <div className="ad-user-screen-wrap">
        <div className="ad-user-left">
          <UserSideBar />
        </div>
        <div className="ad-user-right">
          <Routes>
            <Route exact path="/" element={<UserHome />} />
            <Route exact path="user-courses" element={<Courses />} />
            <Route exact path="my-learning" element={<MyLearning />} />
            <Route exact path="achievement" element={<UserAchievement />} />
            <Route path="reminder" element={<UserReminder />} />
            <Route path="saved-courses" element={<UserSavedCourses />} />
            <Route path="progress" element={<UserProgress />} />
            <Route path="help-center" element={<UserHelpCenter />} />
            <Route path="account-settings" element={<UserAccountSettings />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default UserScreen;
