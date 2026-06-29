"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getMeApi, googleLoginApi, loginUserApi, logoutUserApi, registerUserApi } from "@/lib/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  async function refreshUser() {
    try {
      setAuthLoading(true);
      const response = await getMeApi();
      setUser(response.user);
      return response.user;
    } catch (error) {
      setUser(null);
      return null;
    } finally {
      setAuthLoading(false);
    }
  }

  async function registerUser(userData) {
    const response = await registerUserApi(userData);
    setUser(response.user);
    return response;
  }

  async function loginUser(credentials) {
    const response = await loginUserApi(credentials);
    setUser(response.user);
    return response;
  }

  async function loginWithGoogle(credential) {
    const response = await googleLoginApi(credential);
    setUser(response.user);
    return response;
  }

  async function logoutUser() {
    const response = await logoutUserApi();
    setUser(null);
    return response;
  }

  useEffect(() => {
    refreshUser();
  }, []);

  const authValue = useMemo(
    () => ({ user, authLoading, refreshUser, registerUser, loginUser, loginWithGoogle, logoutUser }),
    [user, authLoading]
  );

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
