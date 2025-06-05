import React from 'react';
import AdminSidebar from '../../../components/AdminSidebar';

const logs = [
  { id: 1, event: 'User login', user: 'vendor1', time: '2025-05-01 10:23 AM' },
  { id: 2, event: 'Product created', user: 'vendor3', time: '2025-05-01 11:45 AM' },
  { id: 3, event: 'Admin login', user: 'admin', time: '2025-05-02 09:15 AM' },
];

const SystemLogs = () => {
  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>System Logs</h2>

        <table className="table table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Event</th>
              <th>User</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr key={log.id}>
                <td>{idx + 1}</td>
                <td>{log.event}</td>
                <td>{log.user}</td>
                <td>{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemLogs;
