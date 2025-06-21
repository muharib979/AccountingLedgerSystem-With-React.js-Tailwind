import api from "../services/api";

export const saveJournalEntry = async (data) => {
    const response = await api.post("/save-journal-entry", data);
  return response.data;
};

export const getJournalEntries = async () => {
    const response = await api.get("/get-all-journalentries");
  return response.data;
};
