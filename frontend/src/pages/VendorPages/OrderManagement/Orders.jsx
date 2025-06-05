import React from 'react';
import { Link } from 'react-router-dom';

const VendorOrders = () => {
  // Replace with real data from API
  const orders = [
    { id: 1001, customer: 'Ahmed', total: 195, date: '2025-05-28', status: 'Delivered' },
    { id: 1002, customer: 'Sara', total: 82, date: '2025-05-27', status: 'Pending' },
    { id: 1003, customer: 'Hassan', total: 64, date: '2025-05-25', status: 'Shipped' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Customer</th>
            <th className="border px-4 py-2">Total (AED)</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td className="border px-4 py-2">{o.id}</td>
              <td className="border px-4 py-2">{o.customer}</td>
              <td className="border px-4 py-2">{o.total}</td>
              <td className="border px-4 py-2">{o.date}</td>
              <td className="border px-4 py-2">{o.status}</td>
              <td className="border px-4 py-2">
                <Link to={`/vendor/order/${o.id}`} className="text-blue-600 underline">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorOrders;
