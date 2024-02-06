import React, { useContext } from "react";
import { User } from "../../../api/User/user";

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: User | undefined;
  error?: any;
  login: (user: User) => void;
  logout: () => void;
}

const voidFunction = () => {};

const AuthContextValues: AuthContextType = {
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  error: undefined,
  login: voidFunction,
  logout: voidFunction,
};

export const AuthContext = React.createContext<AuthContextType>(AuthContextValues);

export const useAuthContext = () => useContext(AuthContext);
