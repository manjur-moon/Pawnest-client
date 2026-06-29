import axiosInstance from "./axiosInstance";

export async function registerUserApi(userData) {
  const { data } = await axiosInstance.post("/api/auth/register", userData);
  return data;
}

export async function loginUserApi(credentials) {
  const { data } = await axiosInstance.post("/api/auth/login", credentials);
  return data;
}

export async function googleLoginApi(credential) {
  const { data } = await axiosInstance.post("/api/auth/google", { credential });
  return data;
}

export async function getMeApi() {
  const { data } = await axiosInstance.get("/api/auth/me");
  return data;
}

export async function logoutUserApi() {
  const { data } = await axiosInstance.post("/api/auth/logout");
  return data;
}
