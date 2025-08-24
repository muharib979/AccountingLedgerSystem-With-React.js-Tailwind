import React, { useState, useEffect } from "react";
import { saveJournalEntry } from "../../services/journalService";
// import { getAccounts } from "../../services/accountService";

const JournalEntryForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    lines: [{ accountId: "", debit: 0, credit: 0 }],
  });

  const [accounts, setAccounts] = useState([]);
  // const [message, setMessage] = useState("");

    const [error, setError] = useState("");
    const [success, setMessage] = useState("");

  useEffect(() => {
    const fetchAccounts = async () => {
      const data = await getAccounts();
      setAccounts(data);
    };
    fetchAccounts();
  }, []);

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
     setError("");
    setMessage("");
    try {
      await saveJournalEntry(formData);
      setMessage("✅ Journal Entry created successfully!");
    } catch (error) {
      setError("❌ Failed to create journal entry");
    }
  };

  return (
    <div className="p-6 bg-white max-w-3xl mx-auto shadow rounded">
      {/* <h2 className="text-2xl font-bold mb-4">Create Journal Entry</h2> */}
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Create Journal Entry</h2>


    {error && <div className="bg-red-100 text-red-700 p-2 mb-4">{error}</div>}
      {success && (
        <div className="bg-green-100 text-green-700 p-2 mb-4">{success}</div>
      )}

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

  <h4 className="mt-4 mb-2 font-semibold">Lines:</h4>
      {formData.lines.map((line, idx) => (
        <div key={idx} className="mb-4 grid grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Account</label>
            <select
              name="accountId"
              value={line.accountId}
              onChange={(e) => handleLineChange(idx, e)}
              className="w-full border p-2 rounded"
            >
              <option value="">-- Select Account --</option>
              {accounts.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Debit</label>
            <input
              type="number"
              name="debit"
              placeholder="Debit"
              value={line.debit}
              onChange={(e) => handleLineChange(idx, e)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Credit</label>
            <input
              type="number"
              name="credit"
              placeholder="Credit"
              value={line.credit}
              onChange={(e) => handleLineChange(idx, e)}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
      ))}


        <button
          type="button"
          onClick={addLine}
          className="mb-4 px-4 py-1 bg-gray-300 rounded"
        >
          + Add Line
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
