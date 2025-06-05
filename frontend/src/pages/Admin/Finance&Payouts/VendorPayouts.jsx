import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/FinancePayouts.css';

const payoutRequests = [
  {
    id: 1,
    vendor: 'Treelogy',
    amount: 4500,
    method: 'Bank Transfer',
    status: 'pending',
    date: '2024-05-01',
  },
  {
    id: 2,
    vendor: 'PalmFoods',
    amount: 2800,
    method: 'PayPal',
    status: 'approved',
    date: '2024-04-28',
  },
  {
    id: 3,
    vendor: 'Style Corner',
    amount: 1200,
    method: 'Bank Transfer',
    status: 'rejected',
    date: '2024-04-20',
  },
];

const VendorPayouts = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Vendor Payout Requests</h2>

        <table className="table table-bordered payout-table mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Vendor</th>
              <th>Amount (AED)</th>
              <th>Method</th>
              <th>Status</th>
              <th>Requested On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payoutRequests.map((req, index) => (
              <tr key={req.id}>
                <td>{index + 1}</td>
                <td>{req.vendor}</td>
                <td>{req.amount.toLocaleString()}</td>
                <td>{req.method}</td>
                <td>
                  <span className={`badge bg-${
                    req.status === 'approved' ? 'success' :
                    req.status === 'rejected' ? 'danger' : 'warning text-dark'
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td>{req.date}</td>
                <td>
                  <button className="btn btn-sm btn-success me-2">Approve</button>
                  <button className="btn btn-sm btn-danger">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorPayouts;
