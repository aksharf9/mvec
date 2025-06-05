import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const VendorLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Vendor Panel</h2>
        <nav className="space-y-2">
          <NavLink to="/vendor/dashboard" className="block hover:underline">Dashboard</NavLink>
          <NavLink to="/vendor/products" className="block hover:underline">My Products</NavLink>
          <NavLink to="/vendor/add-product" className="block hover:underline">Add Product</NavLink>
          <NavLink to="/vendor/product-approvals" className="block hover:underline">Product Approvals</NavLink>
          <NavLink to="/vendor/product-reviews" className="block hover:underline">Product Reviews</NavLink>
          <NavLink to="/vendor/orders" className="block hover:underline">Orders</NavLink>
          <NavLink to="/vendor/earnings" className="block hover:underline">Earnings</NavLink>
          <NavLink to="/vendor/payouts" className="block hover:underline">Payouts</NavLink>
          <NavLink to="/vendor/transactions" className="block hover:underline">Transactions</NavLink>
          <NavLink to="/vendor/settings" className="block hover:underline">Store Settings</NavLink>
          <NavLink to="/vendor/change-password" className="block hover:underline">Change Password</NavLink>
          <NavLink to="/vendor/support" className="block hover:underline">Support</NavLink>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default VendorLayout;
