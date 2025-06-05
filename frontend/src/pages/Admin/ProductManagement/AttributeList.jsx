import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/ProductManagement.css';

const attributes = [
  { id: 1, name: 'Color', values: ['Red', 'Blue', 'Green'] },
  { id: 2, name: 'Size', values: ['S', 'M', 'L', 'XL'] },
  { id: 3, name: 'Material', values: ['Cotton', 'Polyester'] },
];

const AttributeList = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Product Attributes</h2>

        <button className="btn btn-primary mb-3">+ Add New Attribute</button>

        <table className="table table-bordered attribute-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Attribute Name</th>
              <th>Values</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attributes.map((attr, index) => (
              <tr key={attr.id}>
                <td>{index + 1}</td>
                <td>{attr.name}</td>
                <td>{attr.values.join(', ')}</td>
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

export default AttributeList;
