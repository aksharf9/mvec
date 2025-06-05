// Dashboard.jsx
import React from "react";
import DashboardCard from "./DashboardCard";
import VendorNavbar from "./VendorNavbar";

const Dashboard = () => {
  return (
    <div>
      <VendorNavbar />
      <div className="container mt-4">
        <h2>Vendor Dashboard</h2>
        <div className="row">
          <DashboardCard title="Total Orders" value="120" status="active" />
          <DashboardCard title="Earnings (AED)" value="8,750" status="paid" />
          <DashboardCard title="Pending Shipments" value="5" status="pending" />
          <DashboardCard title="Low Stock Items" value="2" status="warning" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
