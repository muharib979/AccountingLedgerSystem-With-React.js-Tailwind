import axios from "axios";

const API_URL = "https://localhost:7081/api/journal";

export const saveJournalEntry = async (data) => {
  const response = await axios.post(`${API_URL}/save-journal-entry`, data);
  return response.data;
};

export const getJournalEntries = async () => {
  const response = await axios.get(`${API_URL}/get-all-journalentries`);
  return response.data;
};
