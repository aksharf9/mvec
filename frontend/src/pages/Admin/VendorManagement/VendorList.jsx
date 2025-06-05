import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/VendorList.css';

const vendors = [
  { id: 1, name: 'Fresh Mart', email: 'fresh@mart.com', status: 'approved' },
  { id: 2, name: 'Style Corner', email: 'style@corner.com', status: 'pending' },
  { id: 3, name: 'QuickTech', email: 'quick@tech.com', status: 'rejected' },
];

const VendorList = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>All Vendors</h2>

        <table className="table table-bordered mt-4 vendor-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Vendor Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor.id}>
                <td>{index + 1}</td>
                <td>{vendor.name}</td>
                <td>{vendor.email}</td>
                <td>
                  <span className={`badge bg-${vendor.status === 'approved' ? 'success' : vendor.status === 'pending' ? 'warning text-dark' : 'danger'}`}>
                    {vendor.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
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

export default VendorList;
