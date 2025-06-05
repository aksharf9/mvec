// VendorNavBar.jsx
import React from "react";
import { Link } from "react-router-dom";

const VendorNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand fw-bold" to="/vendor/dashboard">Vendor Panel</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/vendor/orders">Orders</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vendor/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vendor/payouts">Payouts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vendor/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default VendorNavBar;
