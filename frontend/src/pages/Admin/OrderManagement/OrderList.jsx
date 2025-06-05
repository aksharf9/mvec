import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/OrderManagement.css';

const orders = [
  { id: 1001, customer: 'Fatima Ali', total: 250.0, status: 'pending', date: '2024-05-01' },
  { id: 1002, customer: 'Omar Khan', total: 129.0, status: 'delivered', date: '2024-04-29' },
  { id: 1003, customer: 'Leena Joseph', total: 389.5, status: 'cancelled', date: '2024-04-27' },
];

const OrderList = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>All Orders</h2>

        <table className="table table-bordered order-table mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total (AED)</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.total.toFixed(2)}</td>
                <td>
                  <span
                    className={`badge bg-${
                      order.status === 'delivered'
                        ? 'success'
                        : order.status === 'pending'
                        ? 'warning text-dark'
                        : 'danger'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td>
                  <Link
                    to={`/Admin/OrderDetails/${order.id}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
