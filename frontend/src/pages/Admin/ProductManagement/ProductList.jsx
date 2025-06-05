import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/ProductManagement.css';

const products = [
  {
    id: 101,
    name: 'Olive Oil Premium',
    category: 'Groceries',
    vendor: 'Treelogy',
    price: 75,
    stock: 120,
    status: 'active',
  },
  {
    id: 102,
    name: 'Wireless Headphones',
    category: 'Electronics',
    vendor: 'Tech Cart',
    price: 199,
    stock: 32,
    status: 'inactive',
  },
  {
    id: 103,
    name: 'Cotton Shirt',
    category: 'Clothing',
    vendor: 'Style Corner',
    price: 49,
    stock: 200,
    status: 'active',
  },
];

const ProductList = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>All Products</h2>

        <table className="table table-bordered mt-4 product-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Vendor</th>
              <th>Price (AED)</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, index) => (
              <tr key={prod.id}>
                <td>{index + 1}</td>
                <td>{prod.name}</td>
                <td>{prod.category}</td>
                <td>{prod.vendor}</td>
                <td>{prod.price}</td>
                <td>{prod.stock}</td>
                <td>
                  <span className={`badge bg-${prod.status === 'active' ? 'success' : 'secondary'}`}>
                    {prod.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
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

export default ProductList;
