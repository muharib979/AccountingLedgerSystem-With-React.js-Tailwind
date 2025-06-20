
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
          to="/accounts"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          View Accounts
        </Link>
        <Link
          to="/accounts/create"
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Home;
