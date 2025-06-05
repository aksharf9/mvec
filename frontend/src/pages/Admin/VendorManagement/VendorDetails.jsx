import React from 'react';
import { useParams } from 'react-router-dom';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/VendorDetails.css';

// Mock Data for Now
const mockVendor = {
  id: 2,
  name: 'Style Corner',
  email: 'style@corner.com',
  phone: '+971 55 123 4567',
  status: 'pending',
  store: {
    name: 'Style Corner FZ LLC',
    category: 'Fashion',
    address: 'Dubai Mall, Downtown, Dubai',
    registered: '2023-06-15',
  },
};

const VendorDetails = () => {
  const { id } = useParams(); // Get vendor ID from URL (for future use)

  const vendor = mockVendor; // Later replace with fetch logic

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />

      <div className="admin-content p-4">
        <h2>Vendor Details</h2>

        <div className="vendor-detail-box bg-white p-4 rounded shadow-sm mt-4">
          <h4 className="mb-3">🧑 Vendor Profile</h4>
          <p><strong>Name:</strong> {vendor.name}</p>
          <p><strong>Email:</strong> {vendor.email}</p>
          <p><strong>Phone:</strong> {vendor.phone}</p>
          <p><strong>Status:</strong> <span className={`badge bg-${vendor.status === 'approved' ? 'success' : vendor.status === 'pending' ? 'warning text-dark' : 'danger'}`}>{vendor.status}</span></p>

          <hr className="my-4" />

          <h4 className="mb-3">🏪 Store Information</h4>
          <p><strong>Store Name:</strong> {vendor.store.name}</p>
          <p><strong>Category:</strong> {vendor.store.category}</p>
          <p><strong>Address:</strong> {vendor.store.address}</p>
          <p><strong>Registered:</strong> {vendor.store.registered}</p>

          <div className="mt-4">
            <button className="btn btn-success me-2">Approve</button>
            <button className="btn btn-danger me-2">Reject</button>
            <button className="btn btn-outline-secondary">Block</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;

