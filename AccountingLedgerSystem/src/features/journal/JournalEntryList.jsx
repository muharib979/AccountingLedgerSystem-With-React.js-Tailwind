import React, { useEffect, useState } from "react";
import { getJournalEntries } from "../../services/journalService";

const JournalEntryList = () => {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const data = await getJournalEntries();
        setEntries(data);
        setFilteredEntries(data); // Initially show all
      } catch (err) {
        setError("Failed to load journal entries");
      }
    };

    loadEntries();
  }, []);

  const handleFilter = () => {
    let filtered = [...entries];

    if (startDate) {
      filtered = filtered.filter(
        (entry) => new Date(entry.date) >= new Date(startDate)
      );
    }

    if (endDate) {
      filtered = filtered.filter(
        (entry) => new Date(entry.date) <= new Date(endDate)
      );
    }

    setFilteredEntries(filtered);
  };

  const sortedEntries = [...filteredEntries].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "amount") {
      const totalA = a.lines.reduce((sum, l) => sum + l.debit + l.credit, 0);
      const totalB = b.lines.reduce((sum, l) => sum + l.debit + l.credit, 0);
      return totalB - totalA;
    }
    return 0;
  });

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📄 Journal Entries</h2>

      <div className="mb-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2">
        <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">📅 Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700"
        />
      </div>

                <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">📅 End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700"
          />
  </div>
          <button
            onClick={handleFilter}
            className="mt-5 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Filter
          </button>
        </div>

        <div>
          <label className="text-sm mr-2 font-medium">Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="date">🗓️ Date</option>
            <option value="amount">💰 Amount</option>
          </select>
        </div>
      </div>

  {error && <p className="text-red-500">{error}</p>}

{sortedEntries.length === 0 && <p className="text-gray-500">No entries found</p>}

<div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300 bg-white shadow rounded-lg">
    <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
      <tr>
        <th className="border px-4 py-2 text-left">Date</th>
        <th className="border px-4 py-2 text-left">Description</th>
        <th className="border px-4 py-2 text-left">Account Name</th>
        <th className="border px-4 py-2 text-right">Debit</th>
        <th className="border px-4 py-2 text-right">Credit</th>
      </tr>
    </thead>
    <tbody>
      {sortedEntries.map((entry) =>
        entry.lines.map((line, idx) => (
          <tr key={`${entry.id}-${idx}`} className="hover:bg-gray-50">
            <td className="border px-4 py-2"> {idx === 0 ? new Date(entry.date).toISOString().split("T")[0] : ""}</td>
            <td className="border px-4 py-2">{idx === 0 ? entry.description : ""}</td>
            <td className="border px-4 py-2">{line.accountName}</td>
            <td className="border px-4 py-2 text-right">{line.debit}</td>
            <td className="border px-4 py-2 text-right">{line.credit}</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default JournalEntryList;
