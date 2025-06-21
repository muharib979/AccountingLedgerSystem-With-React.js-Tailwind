import React, { useEffect, useState } from "react";
import { getJournalEntries } from "../../services/journalService";

const JournalEntryList = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const data = await getJournalEntries();
        setEntries(data);
      } catch (err) {
        setError("Failed to load journal entries");
      }
    };

    loadEntries();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📄 Journal Entries</h2>
      {error && <p className="text-red-500">{error}</p>}

      {entries.map((entry) => (
        <div key={entry.id} className="border-b py-4">
          <div className="font-semibold">
            🗓️ {entry.date} — {entry.description}
          </div>
          <div className="ml-4 mt-2">
            {entry.lines.map((line, idx) => (
              <div key={idx} className="flex justify-between text-sm mb-1 px-2">
                <span>Account ID: {line.accountId}</span>
                <span>Debit: {line.debit}</span>
                <span>Credit: {line.credit}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalEntryList;
