import api from "../services/api";

// const API_BASE_URL = "https://localhost:7081/api/accounts";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const saveAccount = async (data) => {
  const response = await api.post("/save-account", data);
  return response.data;
};

export const getAccounts = async () => {
  const response = await api.get("/get-all-accounts");
  return response.data;
};