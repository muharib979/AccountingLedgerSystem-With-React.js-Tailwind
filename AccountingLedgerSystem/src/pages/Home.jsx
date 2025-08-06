
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
//   useEffect(() => {
//   console.log("Home page loaded!");
// }, []);
  return (
    
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">💼 Accounting Ledger System</h1>
      <p className="mb-6 text-gray-700">Manage Accounts, Journal Entries & Trial Balance</p>

      <div className="flex gap-4">

        <Link
          to="/accounts/create"
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
        >
          Create Accounts
        </Link>
                <Link
          to="/accounts"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          View Account
        </Link>
        <Link
            to="/journalentries/create"
            className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
          >
            Create Journal Entry
          </Link>
          <Link
        to="/journalentries"
        className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
      >
        View Journal Entries
      </Link>

      <Link
      to="/trialbalance"
      className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
    >
      View Trial Balance
    </Link>
      </div>
    </div>
  );
};

export default Home;
