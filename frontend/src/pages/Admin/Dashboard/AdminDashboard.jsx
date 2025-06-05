import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import 'C:/Users/aksha/PcAks/MyP/multi-vendor-ecommerce/frontend/src/styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard d-flex">
      <AdminSidebar />

      <div className="admin-content p-4">
        <h1 className="mb-4">Admin Dashboard</h1>

        <div className="row g-4">
          {/* Cards */}
          <div className="col-md-3">
            <div className="stat-card bg-primary text-white p-4 rounded shadow-sm">
              <h4>Total Vendors</h4>
              <h2>45</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card bg-success text-white p-4 rounded shadow-sm">
              <h4>Total Customers</h4>
              <h2>2,300</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card bg-warning text-dark p-4 rounded shadow-sm">
              <h4>Total Products</h4>
              <h2>5,600</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card bg-danger text-white p-4 rounded shadow-sm">
              <h4>Total Orders</h4>
              <h2>8,420</h2>
            </div>
          </div>
        </div>

        {/* Revenue Section */}
        <div className="revenue-section mt-5">
          <h3 className="mb-3">Platform Revenue</h3>
          <div className="bg-white p-4 rounded shadow-sm">
            <h2>$153,000</h2>
            <p className="text-muted">Last 30 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
