
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AccountForm from "../features/accounts/AccountForm";
// import AccountList from "../features/accounts/AccountList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/accounts" element={<AccountList />} /> */}
      <Route path="/accounts/create" element={<AccountForm />} />
    </Routes>
  );
};

export default AppRoutes;
