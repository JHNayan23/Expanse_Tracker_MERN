import api from "../lib/api";

export const loginAPI = async ({ email, password }) => {
  const { data } = await api.post("/api/v1/users/login", { email, password });
  return data;
};

export const registerAPI = async ({ email, password, username }) => {
  const { data } = await api.post("/api/v1/users/register", {
    email,
    password,
    username,
  });
  return data;
};

export const changePasswordAPI = async (newPassword) => {
  const { data } = await api.put("/api/v1/users/change-password", {
    newPassword,
  });
  return data;
};

export const updateProfileAPI = async ({ email, username }) => {
  const { data } = await api.put("/api/v1/users/update-profile", {
    email,
    username,
  });
  return data;
};
