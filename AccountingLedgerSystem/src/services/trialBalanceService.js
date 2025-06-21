import api from "../services/api";

export const getTrialBalance = async () => {
      const response = await api.get("/get-trial-balance");
  return response.data;
};
