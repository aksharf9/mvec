import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';

const SupportTickets = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      user: 'Ayesha Khan',
      email: 'ayesha@example.com',
      issue: 'Order not delivered',
      status: 'Open',
    },
    {
      id: 2,
      user: 'James Paul',
      email: 'james@example.com',
      issue: 'Unable to reset password',
      status: 'Resolved',
    },
  ]);

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Support Tickets</h2>

        <table className="table table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Issue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t, i) => (
              <tr key={t.id}>
                <td>{i + 1}</td>
                <td>{t.user}</td>
                <td>{t.email}</td>
                <td>{t.issue}</td>
                <td>
                  <span className={`badge bg-${t.status === 'Resolved' ? 'success' : 'warning'}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTickets;
