import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ✅ এটাকে ইনপোর্ট করো
import { getLedgerEntries } from "../../services/ledgerService";

const LedgerReport = () => {
  const { accountId } = useParams(); // ✅ URL থেকে accountId নাও
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLedger = async () => {
      try {
        const data = await getLedgerEntries(accountId); // ✅ এখানেও accountId পাঠাও
        setEntries(data);
      } catch (err) {
        setError("Failed to fetch ledger data.");
      }
    };

    if (accountId) {
      fetchLedger();
    }
  }, [accountId]); // ✅ dependency হিসেবে accountId

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">📒 Ledger Report</h2>
      {error && <p className="text-red-600">{error}</p>}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Debit</th>
            <th className="border px-2 py-1">Credit</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td className="border px-2 py-1">{entry.date}</td>
              <td className="border px-2 py-1">{entry.description}</td>
              <td className="border px-2 py-1">{entry.debit}</td>
              <td className="border px-2 py-1">{entry.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LedgerReport;
