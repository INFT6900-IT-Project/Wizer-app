import React from 'react';
import './UserSideBar.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

function UserSideBar() {


  return (
    <div>
      <div className='ad-user-sidebar-wrap'>
        <Link to='/user-screen/achievement' style={{ textDecoration: 'none' }}><p><i class="fa-solid fa-trophy"></i> Achievements</p></Link>
        <Link to='/user-screen/reminder' style={{ textDecoration: 'none' }}><p><i class="fa-solid fa-bell"></i> Reminder</p></Link>
        <Link to='/user-screen/saved-courses' style={{ textDecoration: 'none' }}><p><i class="fa-solid fa-bookmark"></i> Saved Courses</p></Link>
        <Link to='/user-screen/progress' style={{ textDecoration: 'none' }}><p><i class="fa-solid fa-chart-line"></i> Progress</p></Link>
        <Link to='/user-screen/help-center' style={{ textDecoration: 'none' }}><p><i class="fa-regular fa-circle-question"></i> Help Center</p></Link>
        <Link to='/user-screen/account-settings' style={{ textDecoration: 'none' }}><p><i class="fa-solid fa-gear"></i> Account Settings</p></Link>
      </div>
    </div>
  )
}

export default UserSideBar
