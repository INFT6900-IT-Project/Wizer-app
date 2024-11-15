import React, { useEffect, useState } from 'react';
import './UserScreen.css';
import UserHome from './UserComponents/UserHome';
import UserSideBar from './UserComponents/UserSideBar';
import { Routes, Route } from 'react-router-dom';
import Courses from '../CourseDetails/Courses';
import UserAchievement from './UserComponents/UserAchievement';
import UserReminder from './UserComponents/UserReminder';
import UserSavedCourses from './UserComponents/UserSavedCourses';
import UserProgress from './UserComponents/UserProgress';
import UserAccountSettings from './UserComponents/UserAccountSettings';
import UserHelpCenter from './UserComponents/UserHelpCenter';
import MyLearning from './UserComponents/MyLearning';
import AdminDashboard from '../AdminPortal/AdminDashboard';
import { useAuth } from '../../../context/AuthContext';
function UserScreen() {

  const {user}= useAuth()
 

  if (user) {
    return (
      <div>
        <div className='ad-user-screen-wrap'>
          <div className='ad-user-left'>
            <UserSideBar />
          </div>
          <div className='ad-user-right'>
            <Routes>
            {(user.role=="Admin")&&<Route path="" element={<AdminDashboard />} />
            }
              <Route exact path='/' element={<UserHome userData={user} />} />
              <Route exact path='user-courses' element={<Courses />} />
              <Route exact path='my-learning' element={<MyLearning />} />
              <Route exact path='achievement' element={<UserAchievement />} />
              <Route path='reminder' element={<UserReminder />} />
              <Route path='saved-courses' element={<UserSavedCourses />} />
              <Route path='progress' element={<UserProgress />} />
              <Route path='help-center' element={<UserHelpCenter />} />
              <Route path='account-settings' element={<UserAccountSettings userData={user} />} />
             
            </Routes>
          </div>
        </div>
  
  
      </div>)
  }
  
  
}

export default UserScreen;
