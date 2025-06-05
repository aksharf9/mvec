import React from 'react';
import { useParams } from 'react-router-dom';

const VendorOrderDetails = () => {
  const { id } = useParams();

  // Replace with actual order data from API
  const order = {
    id,
    customer: 'Ahmed',
    address: 'Dubai, UAE',
    status: 'Delivered',
    items: [
      { name: 'Olive Oil 500ml', qty: 2, price: 65 },
      { name: 'Dry Figs 1kg', qty: 1, price: 65 }
    ]
  };

  const total = order.items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Order Details - #{order.id}</h2>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Shipping Address:</strong> {order.address}</p>
                    <div className="mt-2 mb-4">
                <label className="font-semibold mr-2">Status:</label>
                <select
                    value={order.status}
                    onChange={(e) => {
                    // TODO: Send API update here
                    alert(`Status updated to: ${e.target.value}`);
                    }}
                    className="border p-2 rounded"
                >
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                </select>
                </div>


      <h3 className="mt-6 mb-2 text-lg font-semibold">Items</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Qty</th>
            <th className="border px-4 py-2">Price (AED)</th>
            <th className="border px-4 py-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.qty}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2">{item.qty * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 font-bold text-right">Total: AED {total}</p>
    </div>
  );
};

export default VendorOrderDetails;
