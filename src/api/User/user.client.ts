import { apiRequest } from "../Api";
import { LoginInput, RegisterInput, User, SetPasswordInput, SetPasswordResponse } from "./user";

export const login = async (data: LoginInput) =>
  apiRequest<LoginInput, User>({
    method: "POST",
    url: "auth/login",
    data,
  });

export const register = async (data: RegisterInput) =>
  apiRequest<RegisterInput, User>({
    method: "POST",
    url: "auth/register",
    data,
  });

export const resetPassword = async (data: SetPasswordInput, token: string) =>
  apiRequest<SetPasswordInput, SetPasswordResponse>({
    method: "POST",
    url: `auth/reset-password`,
    data,
    params: {
      token,
    },
  });

export const getUserDetails = async () => apiRequest<undefined, User>({ method: "GET", url: "users/me" });
