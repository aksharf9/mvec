import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminSidebar.css'; // We'll create this next

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar bg-dark text-white p-3">
      <h3 className="sidebar-title mb-4">SnapBasket Admin</h3>

      <ul className="nav flex-column">
        {/* Dashboard */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/dashboard">🏠 Dashboard</Link>
        </li>

        {/* Vendor Management */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/vendors">🧑‍💼 Vendor Management</Link>
        </li>

        {/* Customer Management */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/customers">👥 Customer Management</Link>
        </li>

        {/* Product Management */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/products">📦 Product Management</Link>
        </li>

        {/* Order Management */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/orders">🛒 Order Management</Link>
        </li>

        {/* Finance & Payouts */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/finance">💰 Finance & Payouts</Link>
        </li>

        {/* Platform Settings */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/settings">⚙️ Platform Settings</Link>
        </li>

        {/* Marketing */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/marketing">📣 Marketing & Promotions</Link>
        </li>

        {/* Content Management */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/cms">📝 Content Management</Link>
        </li>

        {/* Reports */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/reports">📈 Reports & Analytics</Link>
        </li>

        {/* System & Support */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/system">🛠️ System & Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
