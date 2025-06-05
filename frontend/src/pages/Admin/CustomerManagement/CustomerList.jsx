import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/CustomerManagement.css';

const customers = [
  { id: 1, name: 'Fatima Ali', email: 'fatima@example.com', phone: '+971501112222', registered: '2024-03-01', status: 'active' },
  { id: 2, name: 'Omar Khan', email: 'omar@example.com', phone: '+971507778888', registered: '2024-01-15', status: 'blocked' },
  { id: 3, name: 'Leena Joseph', email: 'leena@example.com', phone: '+971505556666', registered: '2023-11-20', status: 'active' },
];

const CustomerList = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>All Customers</h2>

        <table className="table table-bordered mt-4 customer-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registered</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust, index) => (
              <tr key={cust.id}>
                <td>{index + 1}</td>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.phone}</td>
                <td>{cust.registered}</td>
                <td>
                  <span className={`badge bg-${cust.status === 'active' ? 'success' : 'danger'}`}>
                    {cust.status}
                  </span>
                </td>
                <td>
                  <Link
                    to={`/Admin/CustomerDetails/${cust.id}`}
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    View
                  </Link>
                  <button className="btn btn-sm btn-outline-danger">Block</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
