import { RegisterFormData, SignInFormData, UserType } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const userRegister = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const userLogin = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};

export const getCurrentUser = async (): Promise<UserType> => {
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching user");
  }

  return response.json();
};



export const verifyEmail = async (code: string) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/verify-token`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const requestPasswordReset = async (email: string) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password-request`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const resetPassword = async (token: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/reset-password/${token}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const validateToken=async()=>{
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
      method: "POST",
      credentials:"include",
  })

  if(!response.ok){
      throw new Error("Token is not valid")
  }

  return response.json();

}