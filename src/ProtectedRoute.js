import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import verifyToken from './api/verifyToken'
import { useState, useEffect } from 'react'



const ProtectedRoute =()=> {
    const [auth, setAuth] = useState(null); // Use null initially to indicate loading state

    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await verifyToken();
            setAuth(isAuthenticated);
        };

        checkAuth();
    }, []);

  return auth ? <Outlet/> : <Navigate to = '/sign-in'/>;

}

export default ProtectedRoute
