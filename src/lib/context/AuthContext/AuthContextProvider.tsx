import React, { useEffect, useState } from "react";
import axios from "axios";
import localforage from "localforage";
import { AuthContextType, AuthContext } from "./AuthContext";
import { getUserDetails } from "../../../api/User/user.client";
import { User } from "../../../api/User/user";

interface AuthContextProviderProps {
  children: React.ReactNode | null;
}

export const LOCAL_STORAGE_KEY = "EXAMPLE";

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState<any>();

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    const userStorageDetails = await localforage.getItem<string>(LOCAL_STORAGE_KEY);

    if (!userStorageDetails) {
      setLoading(false);
      setUser(undefined);
      return;
    }
    axios.defaults.headers.common.Authorization = `Bearer ${userStorageDetails}`;

    try {
      const res = await getUserDetails();
      setUser(res.data);
    } catch (err: any) {
      setError(err);
      localforage.removeItem(LOCAL_STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  };

  const login = (user: User) => {
    setUser(user as any);
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    localforage.setItem(LOCAL_STORAGE_KEY, user.token);
  };

  const logout = async () => {
    setUser(undefined);
    localforage.removeItem(LOCAL_STORAGE_KEY);
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
