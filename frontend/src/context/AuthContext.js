import React, { createContext, useContext, useState, useEffect } from "react";
import client from "../api/client";
import verifyToken from "../api/verifyToken";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

// Custom hook to access AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState();

  // Fetch user info and permissions on mount (or on login)
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const [data, error] = await client.get("/users/me", { token: token });
    if (error) return error;
    setUser(data);
    setPermissions(data?.role);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    setPermissions(null);
    window.location = "/home";
  };

  const scheduleTokenLogout = async () => {
    const token = localStorage.getItem("token");
    const isValid = await verifyToken();
    if (!token) return;

    if (!isValid && token) {
      signOut();
      return;
    }

    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    const expirationTime = decodedToken.exp * 1000 - Date.now();

    // Schedule a logout based on token expiration
    if (expirationTime > 0) {
      setTimeout(() => {
        signOut();
      }, expirationTime);
    } else {
      signOut();
    }
  };

  useEffect(() => {
    if (!user) fetchUserData();
    scheduleTokenLogout();
  }, []);

  return (
    <AuthContext.Provider value={{ user, permissions, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
