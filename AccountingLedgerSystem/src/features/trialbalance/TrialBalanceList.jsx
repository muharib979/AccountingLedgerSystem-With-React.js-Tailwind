import React, { useEffect, useState } from "react";
import { getTrialBalance } from "../../services/trialBalanceService";

const TrialBalanceList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTrialBalance();
        setData(result);
      } catch (err) {
        setError("Failed to load trial balance");
      }
    };
    fetchData();
  }, []);

  const totalDebit = data.reduce((sum, item) => sum + item.totalDebit, 0);
  const totalCredit = data.reduce((sum, item) => sum + item.totalCredit, 0);
  const netBalance = totalDebit - totalCredit;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">📊 Trial Balance</h2>
      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border-collapse border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">Account Name</th>
            <th className="border px-3 py-2">Type</th>
            <th className="border px-3 py-2">Debit</th>
            <th className="border px-3 py-2">Credit</th>
            <th className="border px-3 py-2">Net Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-3 py-2">{item.name}</td>
              <td className="border px-3 py-2">{item.type}</td>
              <td className="border px-3 py-2 text-green-700">{item.totalDebit}</td>
              <td className="border px-3 py-2 text-red-700">{item.totalCredit}</td>
              <td className="border px-3 py-2 font-semibold">
                {item.netBalance >= 0 ? (
                  <span className="text-green-600">+{item.netBalance}</span>
                ) : (
                  <span className="text-red-600">{item.netBalance}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-50 font-semibold">
          <tr>
            <td className="border px-3 py-2" colSpan={2}>Total</td>
            <td className="border px-3 py-2 text-green-700">{totalDebit}</td>
            <td className="border px-3 py-2 text-red-700">{totalCredit}</td>
            <td className="border px-3 py-2">
              {netBalance >= 0 ? (
                <span className="text-green-600">+{netBalance}</span>
              ) : (
                <span className="text-red-600">{netBalance}</span>
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TrialBalanceList;
