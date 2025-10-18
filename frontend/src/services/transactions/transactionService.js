import api from "../lib/api";

export const addTransactionAPI = async ({
  type,
  category,
  date,
  description,
  amount,
}) => {
  const { data } = await api.post("/api/v1/transactions/create", {
    category,
    date,
    description,
    amount,
    type,
  });
  return data;
};

export const listTransactionsAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const { data } = await api.get("/api/v1/transactions/lists", {
    params: { category, type, startDate, endDate },
  });
  return data;
};
