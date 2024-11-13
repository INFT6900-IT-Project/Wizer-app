import React from 'react';
import './UserScreen.css';
import UserHome from './UserComponents/UserHome';
import UserSideBar from './UserComponents/UserSideBar';


function UserScreen() {
  return (
    <div>
      <div className='ad-user-screen-wrap'>
        <div className='ad-user-left'>
          <UserSideBar/>
        </div>
        <div className='ad-user-right'>
          <UserHome />
        </div>
      </div>


    </div>
  )
}

export default UserScreen
