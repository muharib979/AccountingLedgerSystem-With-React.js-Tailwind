import React, { useState } from "react";
import { saveJournalEntry } from "../../services/journalService";

const JournalEntryForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    lines: [
      { accountId: "", debit: 0, credit: 0 },
    ],
  });

  const [message, setMessage] = useState("");

  const handleLineChange = (index, e) => {
    const { name, value } = e.target;
    const newLines = [...formData.lines];
    newLines[index][name] = value;
    setFormData({ ...formData, lines: newLines });
  };

  const addLine = () => {
    setFormData({
      ...formData,
      lines: [...formData.lines, { accountId: "", debit: 0, credit: 0 }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await saveJournalEntry(formData);
      setMessage("✅ Journal Entry created successfully!");
    } catch (error) {
      setMessage("❌ Failed to create journal entry");
    }
  };

  return (
    <div className="p-6 bg-white max-w-3xl mx-auto shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Create Journal Entry</h2>

      {message && <div className="mb-4 text-red-600">{message}</div>}

      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full border rounded p-2"
          />
        </label>

        <label className="block mb-2">
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full border rounded p-2"
          />
        </label>

        <h4 className="mt-4 mb-2 font-semibold">Journal Details:</h4>
        {formData.lines.map((line, idx) => (
          <div key={idx} className="mb-2 flex gap-2">
            <input
              type="number"
              name="accountId"
              placeholder="Account ID"
              value={line.accountId}
              onChange={(e) => handleLineChange(idx, e)}
              className="w-1/3 border p-2"
            />
            <input
              type="number"
              name="debit"
              placeholder="Debit"
              value={line.debit}
              onChange={(e) => handleLineChange(idx, e)}
              className="w-1/3 border p-2"
            />
            <input
              type="number"
              name="credit"
              placeholder="Credit"
              value={line.credit}
              onChange={(e) => handleLineChange(idx, e)}
              className="w-1/3 border p-2"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addLine}
          className="mb-4 px-4 py-1 bg-gray-300 rounded"
        >
          + Add Journal Details
        </button>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Journal Entry
        </button>
      </form>
    </div>
  );
};

export default JournalEntryForm;
