import React from 'react';
import './UserSideBar.css'

function UserSideBar() {
  return (
    <div>
      <div className='ad-user-sidebar-wrap'>
      <p><i class="fa-solid fa-trophy"></i> Achievements</p>
          <p><i class="fa-solid fa-chalkboard"></i> Learning Path</p>
          <p><i class="fa-solid fa-bars-progress"></i> Progress</p>
          <p><i class="fa-regular fa-message"></i> Discussion Forum</p>
          <p><i class="fa-regular fa-circle-question"></i> Help Center</p>
          <p><i class="fa-solid fa-gear"></i> Account Settings</p>
      </div>
    </div>
  )
}

export default UserSideBar
