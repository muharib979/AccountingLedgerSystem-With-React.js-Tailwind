
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AccountForm from "../features/accounts/AccountForm";
import AccountList from "../features/accounts/AccountList";
import JournalEntryForm from "../features/journal/JournalEntryForm";
import JournalEntryList from "../features/journal/JournalEntryList";
import TrialBalanceList from "../features/trialbalance/TrialBalanceList";
import LedgerReport from "../features/Ledger/LedgerReport";
import Signup from "../features/Signup";
import LoginForm from "../features/LoginForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/accounts" element={<AccountList />} />
      <Route path="/accounts/create" element={<AccountForm />} />
      <Route path="/journalentries/create" element={<JournalEntryForm />} />
      <Route path="/journalentries" element={<JournalEntryList />} />
      <Route path="/trialbalance" element={<TrialBalanceList />} />
     <Route path="/ledger/:accountId" element={<LedgerReport />} />
     
    </Routes>
  );
};

export default AppRoutes;
