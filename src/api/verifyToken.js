import React from 'react'
import axios from 'axios'
async function verifyToken() {
  const token= localStorage.getItem("token")

  if (!token) return false
  try {
    const response= await axios.get(`http://127.0.0.1:8000/verify-token/${token}`) 
    console.log(response.data)
  } catch (error) {
    console.error(error)
    console.log(reponse.data)
  }
}

export default verifyToken
