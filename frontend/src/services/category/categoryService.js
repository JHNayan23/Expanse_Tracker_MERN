import api from "../lib/api";

export const addCategoryAPI = async ({ name, type }) => {
  const { data } = await api.post("/api/v1/categories/create", { name, type });
  return data;
};

export const updateCategoryAPI = async ({ name, type, id }) => {
  const { data } = await api.put(`/api/v1/categories/update/${id}`, {
    name,
    type,
  });
  return data;
};

export const deleteCategoryAPI = async (id) => {
  const { data } = await api.delete(`/api/v1/categories/delete/${id}`);
  return data;
};

export const listCategoriesAPI = async () => {
  const { data } = await api.get("/api/v1/categories/lists");
  return data;
};
