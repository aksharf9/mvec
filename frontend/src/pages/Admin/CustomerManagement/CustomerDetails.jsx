import React from 'react';
import { useParams } from 'react-router-dom';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/CustomerManagement.css';

// Mock Data (simulate fetched result)
const mockCustomer = {
  id: 1,
  name: 'Fatima Ali',
  email: 'fatima@example.com',
  phone: '+971501112222',
  registered: '2024-03-01',
  status: 'active',
  lastLogin: '2024-04-15 13:25',
};

const CustomerDetails = () => {
  const { id } = useParams(); // Get :id from URL for dynamic fetch later
  const customer = mockCustomer; // Later: fetch by ID

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Customer Details</h2>

        <div className="customer-detail-box bg-white p-4 rounded shadow-sm mt-4">
          <h4 className="mb-3">👤 Profile</h4>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={`badge bg-${customer.status === 'active' ? 'success' : 'danger'}`}>
              {customer.status}
            </span>
          </p>

          <hr className="my-4" />

          <h4 className="mb-3">📅 Account Info</h4>
          <p><strong>Registered:</strong> {customer.registered}</p>
          <p><strong>Last Login:</strong> {customer.lastLogin}</p>

          <div className="mt-4">
            <button className="btn btn-danger me-2">Block</button>
            <button className="btn btn-outline-secondary">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
