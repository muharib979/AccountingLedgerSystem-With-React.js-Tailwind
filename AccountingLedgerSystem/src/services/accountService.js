import axios from "axios";

const API_BASE_URL = "https://localhost:7081/api/accounts";

export const saveAccount = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/save-account`, data);
  return response.data;
};

export const getAccounts = async () => {
  const response = await axios.get(`${API_BASE_URL}/get-all-accounts`);
  return response.data;
};