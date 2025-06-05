import React from 'react';
import { useParams } from 'react-router-dom';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/OrderManagement.css';

// Mock order data
const mockOrder = {
  id: 1001,
  customer: {
    name: 'Fatima Ali',
    email: 'fatima@example.com',
    phone: '+971501112222',
  },
  total: 250.0,
  status: 'pending',
  date: '2024-05-01',
  paymentMethod: 'Credit Card',
  shippingAddress: 'Al Barsha, Dubai, UAE',
  billingAddress: 'Same as shipping',
  items: [
    { name: 'Olive Oil Premium', price: 75, qty: 2 },
    { name: 'Dates Box', price: 50, qty: 2 },
  ],
};

const OrderDetails = () => {
  const { id } = useParams();
  const order = mockOrder; // Later: fetch by ID

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Order #{order.id}</h2>

        <div className="order-section mt-4">
          <h5>👤 Customer Information</h5>
          <p><strong>Name:</strong> {order.customer.name}</p>
          <p><strong>Email:</strong> {order.customer.email}</p>
          <p><strong>Phone:</strong> {order.customer.phone}</p>
        </div>

        <hr />

        <div className="order-section">
          <h5>📦 Order Summary</h5>
          <p><strong>Status:</strong> <span className={`badge bg-${order.status === 'delivered' ? 'success' : order.status === 'pending' ? 'warning text-dark' : 'danger'}`}>{order.status}</span></p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Total:</strong> AED {order.total.toFixed(2)}</p>
          <p><strong>Payment:</strong> {order.paymentMethod}</p>
        </div>

        <hr />

        <div className="order-section">
          <h5>🚚 Shipping & Billing</h5>
          <p><strong>Shipping:</strong> {order.shippingAddress}</p>
          <p><strong>Billing:</strong> {order.billingAddress}</p>
        </div>

        <hr />

        <div className="order-section">
          <h5>🧾 Items Ordered</h5>
          <table className="table table-sm table-bordered mt-3">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>AED {item.price.toFixed(2)}</td>
                  <td>AED {(item.price * item.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <button className="btn btn-success me-2">Mark as Delivered</button>
          <button className="btn btn-danger">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
