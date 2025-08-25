// src/features/accounts/AccountForm.jsx
import React, { useState } from "react";
import { saveAccount } from "../../services/accountService";

const AccountForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await saveAccount(formData); // ✅ Use service
      setSuccess("Account created successfully!");
      setFormData({ name: "", type: "" });
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.errors?.[0]?.errorMessage ||
          "Failed to create account"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

      {error && <div className="bg-red-100 text-red-700 p-2 mb-4">{error}</div>}
      {success && (
        <div className="bg-green-100 text-green-700 p-2 mb-4">{success}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            className="w-full border p-2 rounded"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Type --</option>
            <option value="Asset">Asset</option>
            <option value="Liability">Liability</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
        >
          Save Accounts
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
