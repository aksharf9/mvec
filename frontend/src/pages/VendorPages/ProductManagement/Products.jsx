import React from 'react';
import { Link } from 'react-router-dom';

const VendorProducts = () => {
  // Sample static data (replace with API data later)
  const products = [
    { id: 1, name: "Olive Oil 500ml", price: 65, stock: 120, status: "Approved" },
    { id: 2, name: "Organic Honey 1kg", price: 80, stock: 75, status: "Pending" },
    { id: 3, name: "Dry Figs", price: 50, stock: 45, status: "Rejected" }
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Products</h2>
        <Link to="/vendor/add-product" className="btn btn-primary">
          Add Product
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price (AED)</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td className="border px-4 py-2">{prod.name}</td>
              <td className="border px-4 py-2">{prod.price}</td>
              <td className="border px-4 py-2">{prod.stock}</td>
              <td className="border px-4 py-2">{prod.status}</td>
              <td className="border px-4 py-2">
                <Link to={`/vendor/edit-product/${prod.id}`} className="text-blue-500">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorProducts;
