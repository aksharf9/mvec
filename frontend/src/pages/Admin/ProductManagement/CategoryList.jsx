import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/ProductManagement.css';

const categories = [
  { id: 1, name: 'Groceries', created: '2023-11-01' },
  { id: 2, name: 'Electronics', created: '2023-12-05' },
  { id: 3, name: 'Clothing', created: '2024-01-10' },
];

const CategoryList = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Product Categories</h2>

        <button className="btn btn-primary mb-3">+ Add New Category</button>

        <table className="table table-bordered category-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Created On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>{cat.name}</td>
                <td>{cat.created}</td>
                <td>
                  <button className="btn btn-sm btn-outline-warning me-2">Edit</button>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
