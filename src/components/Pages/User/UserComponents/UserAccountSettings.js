import React, { useEffect, useState } from 'react'
import './UserAccountSettings.css'
import axios from 'axios';

function UserAccountSettings() {
  const [username, setUsername] = useState(); // Replace with dynamic data
  const [email, setEmail] = useState(); // Replace with dynamic data
  const [mfaEnabled, setMfaEnabled] = useState(false); // Track MFA status
  const [passChangeForm, setPassChangeForm] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleRegisterMFA = () => {
    // Placeholder for MFA registration logic
    alert("MFA registration process initiated!");
    setMfaEnabled(true);
  };
  const handleChangePassword = () => {
    setPassChangeForm(true)
  };

  const handlesubmitChangePassword = async (e) => {
    e.preventDefault()
    if (newPassword != confirmPassword) {
      alert("New password does not match")
    } else {
      const changePassList = {
        "username": username,
        "old_password": currentPassword,
        "new_password": newPassword
      }
      try {
        const response = await axios.post('http://127.0.0.1:8000/change_password', changePassList)
        alert('Password has been changed successfully.')
        setPassChangeForm(false)
      } catch (error) {
        console.log(error)
        alert('Wrong old password')
      }
    }
    // Placeholder for change password logic

    ;
  };

  useEffect(() => {
    const token = localStorage.getItem("token")

    async function fetchData() {

      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/me?token=${token}`)
        console.log(response)
        setEmail(response.data.email)
        setUsername(response.data.username)
      } catch (error) {

      }
    }
    fetchData()


  }, [])

  return (
    <div className="el-user-management">
      {passChangeForm ?

        <>
          <i onClick={() => setPassChangeForm(false)} class="fa-solid fa-arrow-left"></i>
          <h2>Change Password</h2>
          <div className="el-password-form">
            <label className='el-input-form'>
              Current Password
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </label>

            <label className='el-input-form'>
              New Password
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>

            <label className='el-input-form'>
              Confirm New Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>

            <button className="el-button primary" onClick={handlesubmitChangePassword}>
              Change Password
            </button>
          </div>
        </>
        :
        <div><h2>User Profile Management</h2>

          <div className="el-user-info">
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>

          <div className="el-user-actions">
            <button className="el-button primary" onClick={handleRegisterMFA} disabled={mfaEnabled}>
              {mfaEnabled ? "MFA Registered" : "Register for MFA"}
            </button>

            <button className="el-button secondary" onClick={handleChangePassword}>Change Password</button>
          </div></div>}
    </div>
  );
}

export default UserAccountSettings
