import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateCompany from "./pages/CreateCompany";
import CompanyList from "./pages/CompanyList";
import Profile from "./pages/Profile";
import Company from "./components/Company";
import EditCompany from "./components/EditCompany";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies/create" element={<CreateCompany />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/companies/:id" element={<Company />} />
      <Route path="/companies/:id/edit" element={<EditCompany />} />
    </Routes>
  );
};

export default App;
