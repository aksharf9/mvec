import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';

const AdminUsers = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Super Admin', email: 'admin@snapbasket.com', role: 'Super Admin' },
    { id: 2, name: 'Moderator Ali', email: 'ali@snapbasket.com', role: 'Moderator' },
  ]);

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Admin Users & Roles</h2>

        <table className="table table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, idx) => (
              <tr key={admin.id}>
                <td>{idx + 1}</td>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
