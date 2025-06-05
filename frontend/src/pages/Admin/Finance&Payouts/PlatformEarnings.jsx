import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/FinancePayouts.css';

const PlatformEarnings = () => {
  const earnings = {
    totalRevenue: 95000,
    thisMonthRevenue: 12500,
    totalOrders: 340,
    vendorPayouts: 45000,
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />

      <div className="admin-content p-4">
        <h2>Platform Earnings Summary</h2>

        <div className="row mt-4">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm earnings-card">
              <div className="card-body">
                <h6>Total Revenue</h6>
                <h4>AED {earnings.totalRevenue.toLocaleString()}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm earnings-card">
              <div className="card-body">
                <h6>This Month</h6>
                <h4>AED {earnings.thisMonthRevenue.toLocaleString()}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm earnings-card">
              <div className="card-body">
                <h6>Total Orders</h6>
                <h4>{earnings.totalOrders}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm earnings-card">
              <div className="card-body">
                <h6>Vendor Payouts</h6>
                <h4>AED {earnings.vendorPayouts.toLocaleString()}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformEarnings;
