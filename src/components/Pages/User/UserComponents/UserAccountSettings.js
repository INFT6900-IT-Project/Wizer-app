import React, { useEffect, useState } from 'react'
import './UserAccountSettings.css'
import axios from 'axios';
import { toastError, toastSuccess } from '../../../../helpers/toast';

function UserAccountSettings({ userData }) {
  const [username, setUsername] = useState(); // Replace with dynamic data
  const [email, setEmail] = useState(); // Replace with dynamic data
  const [mfaRequest, setMfaRequest] = useState(false);
  const [qrCode, setqrCode] = useState();
  const [passChangeForm, setPassChangeForm] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mfaRegistered, setmfaRegistered] = useState(false)


  const handleRegisterMFA = async (e) => {
    // Placeholder for MFA registration logic
    setMfaRequest(true);
    try {
      const response = await axios.post(`http://127.0.0.1:8000/mfa/otp-register`, { "username": username }, { responseType: 'blob' })
      const imageUrl = URL.createObjectURL(response.data)
      setqrCode(imageUrl)
    } catch (error) {
      console.log(error)
    }
  };
  const handleChangePassword = () => {
    setPassChangeForm(true)
  };

  const handlesubmitChangePassword = async (e) => {
    e.preventDefault()
    if (newPassword != confirmPassword) {
      toastError("New password does not match")
    } else {
      const changePassList = {
        "username": username,
        "old_password": currentPassword,
        "new_password": newPassword
      }
      try {
        const response = await axios.post('http://127.0.0.1:8000/change_password', changePassList)
        toastSuccess('Password has been changed successfully.')
        setPassChangeForm(false)
      } catch (error) {
        console.log(error)
        toastError('Wrong old password')
      }
    }
    // Placeholder for change password logic

    ;
  };

  const cancel2fa = async (e) => {
    setMfaRequest(false)
    try {
      await axios.delete(`http://127.0.0.1:8000/mfa/cancel/${username}`)
      setmfaRegistered(false)
      toastSuccess("Multi-factor authorization has been canceled!")
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit2fa = () => {
    setMfaRequest(false)
    setmfaRegistered(true)
    toastSuccess("Multi-Factor Authorization  has been registered!")
  }
  useEffect(() => {

    setEmail(userData.email)
    setUsername(userData.username)
    setmfaRegistered(userData.istwofactorenabled)
  }
    , [])

  return (
    <div className="el-user-management">
      {passChangeForm ?

        (<>
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
        </>)
        : mfaRequest ?

          (<><i onClick={cancel2fa} class="fa-solid fa-arrow-left"></i>
            <h2>Please scan the QR code below using your Google or Microsoft Authenticator App </h2>
            <img src={qrCode}></img>
            <div className='ad-2fa-btn-wrap'>
            <button className="el-button submit" onClick={handleSubmit2fa}>
              Submit
            </button>

            <button className="el-button cancel " onClick={cancel2fa}>
              Cancel
            </button>
            </div>
            
          </>)

          :
          (<div>
            <h2>User Profile Management</h2>

            <div className="el-user-info">
              <p><strong>Username:</strong> {username}</p>
              <p><strong>Email:</strong> {email}</p>
            </div>

            <div className="el-user-actions">
              {mfaRegistered ?
                <button className="el-button primary" onClick={cancel2fa} >
                  Cancel MFA
                </button>
                :
                <button className="el-button primary" onClick={handleRegisterMFA} >
                  Register for MFA
                </button>}
              <button className="el-button secondary" onClick={handleChangePassword}>Change Password</button>
            </div>
          </div>)
      }
    </div>
  );
}

export default UserAccountSettings
