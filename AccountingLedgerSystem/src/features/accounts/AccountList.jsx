import React, { useEffect, useState } from "react";
import { getAccounts } from "../../Services/accountService";

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getAccounts();
        setAccounts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch accounts");
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Accounts List</h2>

      {error && <div className="text-red-600 mb-2">{error}</div>}

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.id}>
              <td className="border px-4 py-2">{acc.id}</td>
              <td className="border px-4 py-2">{acc.name}</td>
              <td className="border px-4 py-2">{acc.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;