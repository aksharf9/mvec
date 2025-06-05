import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/Reports.css';

const mockVendors = [
  { id: 1, name: 'Fresh Mart', orders: 120, revenue: 5400, rating: 4.8 },
  { id: 2, name: 'Style Corner', orders: 90, revenue: 6200, rating: 4.6 },
  { id: 3, name: 'Tech Hub', orders: 150, revenue: 8900, rating: 4.9 },
  { id: 4, name: 'Sweet Treats', orders: 110, revenue: 4700, rating: 4.5 },
];

const VendorPerformance = () => {
  const [vendors] = useState(mockVendors);

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Vendor Performance</h2>

        <table className="table table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Vendor</th>
              <th>Orders</th>
              <th>Revenue (AED)</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor.id}>
                <td>{index + 1}</td>
                <td>{vendor.name}</td>
                <td>{vendor.orders}</td>
                <td>{vendor.revenue.toLocaleString()}</td>
                <td>
                  <span className="badge bg-success">{vendor.rating}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorPerformance;
