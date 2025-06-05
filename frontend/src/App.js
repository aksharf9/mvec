import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StoresPage from './pages/StoresPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';

import AppAdmin from './AppAdmin';
import AppVendor from './AppVendor';


import AdminLogin from './pages/Admin/AdminLogin';



// Import the new guard
import PrivateAdminRoute from "./components/PrivateAdminRoute";
// Optional: import PrivateVendorRoute if you want to protect vendor as well
// import PrivateVendorRoute from "./components/PrivateVendorRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/stores-near-you" element={<StoresPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
<Route path="/Admin/Login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route path="/admin/*" element={
          <PrivateAdminRoute>
            <AppAdmin />
          </PrivateAdminRoute>
        } />

        {/* Protected Vendor Routes - optional */}
        {/* 
        <Route path="/vendor/*" element={
          <PrivateVendorRoute>
            <AppVendor />
          </PrivateVendorRoute>
        } />
        */}

        {/* Unprotected Vendor Routes (remove if protecting) */}
        <Route path="/vendor/*" element={<AppVendor />} />
      </Routes>
    </Router>
  );
}

export default App;
