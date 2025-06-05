// /frontend/src/components/PrivateAdminRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Dummy admin check. Update to use your real logic (localStorage, Redux, Context, etc)
const isAdminAuthenticated = () => {
  // Example: user saved in localStorage after login with a "role" property
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.role === "admin" && user.token;
};

const PrivateAdminRoute = () => {
  return isAdminAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateAdminRoute;
