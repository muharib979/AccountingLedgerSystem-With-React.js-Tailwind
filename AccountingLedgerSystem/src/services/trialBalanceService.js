import axios from "axios";

const API_URL = "https://localhost:7081/api/trialbalance";

export const getTrialBalance = async () => {
  const response = await axios.get(`${API_URL}/get-trial-balance`);
  return response.data;
};
