import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/ProductManagement.css';

const pendingProducts = [
  {
    id: 501,
    name: 'Organic Dates',
    vendor: 'PalmFoods',
    category: 'Groceries',
    price: 45,
    status: 'pending',
  },
  {
    id: 502,
    name: 'Smart Fitness Band',
    vendor: 'FitTech',
    category: 'Electronics',
    price: 129,
    status: 'pending',
  },
];

const ProductApprovalQueue = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Product Approval Queue</h2>

        <table className="table table-bordered approval-table mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Vendor</th>
              <th>Category</th>
              <th>Price (AED)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingProducts.map((prod, index) => (
              <tr key={prod.id}>
                <td>{index + 1}</td>
                <td>{prod.name}</td>
                <td>{prod.vendor}</td>
                <td>{prod.category}</td>
                <td>{prod.price}</td>
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

export default ProductApprovalQueue;
