import React, { useEffect, useState } from "react";
import axios from "axios";
import localforage from "localforage";
import { AuthContextType, AuthContext } from "./AuthContext";
import { getUserDetails } from "../../../api/User/user.client";
import { User } from "../../../api/User/user";

interface AuthContextProviderProps {
  children: React.ReactNode | null;
}

export const LOCAL_STORAGE_KEY = "USER_TOKEN";

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{token: string} | undefined>(undefined);
  const [error, setError] = useState<any>();

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    const userStorageDetails = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!userStorageDetails) {
      setLoading(false);
      setUser(undefined);
      return;
    }
    setUser({token: userStorageDetails})
    axios.defaults.headers.common.Authorization = `Bearer ${userStorageDetails}`;

    // try {
    //   // const res = await getUserDetails();
    //   // setUser(res.data);
    // } catch (err: any) {
    //   setError(err);
    //   localforage.removeItem(LOCAL_STORAGE_KEY);
    // } finally {
    //   setLoading(false);
    // }
  };

  const login = (token: string) => {
    setUser({token});
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem(LOCAL_STORAGE_KEY, token);
  };

  const logout = async () => {
    setUser(undefined);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  // if (loading) return <LoadingScreen />;

  const context: AuthContextType = {
    isAuthenticated: user !== undefined,
    isLoading: loading,
    error: error,
    user: user,
    login: login,
    logout: logout,
  };

  return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
};
