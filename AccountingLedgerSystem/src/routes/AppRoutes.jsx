
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AccountForm from "../features/accounts/AccountForm";
import AccountList from "../features/accounts/AccountList";
import JournalEntryForm from "../features/journal/JournalEntryForm";
import JournalEntryList from "../features/journal/JournalEntryList";
import TrialBalanceList from "../features/trialbalance/TrialBalanceList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accounts" element={<AccountList />} />
      <Route path="/accounts/create" element={<AccountForm />} />
      <Route path="/journalentries/create" element={<JournalEntryForm />} />
      <Route path="/journalentries" element={<JournalEntryList />} />
      <Route path="/trialbalance" element={<TrialBalanceList />} />
    </Routes>
  );
};

export default AppRoutes;
