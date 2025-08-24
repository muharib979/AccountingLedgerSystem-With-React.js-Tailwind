import api from "../services/api";

export const getLedgerEntries = async (accountId) => {
  const response = await api.get(`/ledger/${accountId}`);
  return response.data;
};
