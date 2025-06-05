import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/FinancePayouts.css';

// Mocked vendor report data
const vendors = [
  { id: 1, name: 'Treelogy', totalSales: 25000, commissionPercent: 10, monthlyFee: 500 },
  { id: 2, name: 'Style Corner', totalSales: 18000, commissionPercent: 12, monthlyFee: 500 },
  { id: 3, name: 'PalmFoods', totalSales: 31000, commissionPercent: 8, monthlyFee: 500 },
];

const CommissionReports = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Commission Reports</h2>

        <table className="table table-bordered mt-4 commission-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Vendor</th>
              <th>Total Sales (AED)</th>
              <th>Commission %</th>
              <th>Commission Earned (AED)</th>
              <th>Monthly Fee (AED)</th>
              <th>Total Platform Earnings (AED)</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => {
              const commissionEarned = (vendor.totalSales * vendor.commissionPercent) / 100;
              const totalPlatformEarnings = commissionEarned + vendor.monthlyFee;

              return (
                <tr key={vendor.id}>
                  <td>{index + 1}</td>
                  <td>{vendor.name}</td>
                  <td>{vendor.totalSales.toLocaleString()}</td>
                  <td>{vendor.commissionPercent}%</td>
                  <td>{commissionEarned.toLocaleString()}</td>
                  <td>{vendor.monthlyFee.toLocaleString()}</td>
                  <td>{totalPlatformEarnings.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommissionReports;
