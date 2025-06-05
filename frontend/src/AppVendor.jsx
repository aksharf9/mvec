import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorLayout from './pages/VendorPages/VendorLayout';

import VendorDashboard from './pages/VendorPages/VendorDashboard/Dashboard';
import VendorProducts from './pages/VendorPages/ProductManagement/Products';
import VendorAddProduct from './pages/VendorPages/ProductManagement/AddProduct';
import VendorEditProduct from './pages/VendorPages/ProductManagement/EditProduct';
import ProductApprovals from './pages/VendorPages/ProductManagement/ProductApprovals';
import ProductReviews from './pages/VendorPages/ProductManagement/ProductReviews';
import VendorOrders from './pages/VendorPages/OrderManagement/Orders';
import VendorOrderDetails from './pages/VendorPages/OrderManagement/OrderDetails';
import VendorEarnings from './pages/VendorPages/Payouts&Finance/Earnings';
import VendorPayouts from './pages/VendorPages/Payouts&Finance/Payouts';
import VendorTransactions from './pages/VendorPages/Payouts&Finance/Transactions';
import VendorSettings from './pages/VendorPages/Settings/Settings';
import VendorChangePassword from './pages/VendorPages/Settings/ChangePassword';
import SupportCenter from './pages/VendorPages/Support/SupportCenter';

const AppVendor = () => {
  return (
    <Routes>
      <Route path="/" element={<VendorLayout />}>
        <Route path="dashboard" element={<VendorDashboard />} />
        <Route path="products" element={<VendorProducts />} />
        <Route path="add-product" element={<VendorAddProduct />} />
        <Route path="edit-product/:id" element={<VendorEditProduct />} />
        <Route path="product-approvals" element={<ProductApprovals />} />
        <Route path="product-reviews" element={<ProductReviews />} />
        <Route path="orders" element={<VendorOrders />} />
        <Route path="order/:id" element={<VendorOrderDetails />} />
        <Route path="earnings" element={<VendorEarnings />} />
        <Route path="payouts" element={<VendorPayouts />} />
        <Route path="transactions" element={<VendorTransactions />} />
        <Route path="settings" element={<VendorSettings />} />
        <Route path="change-password" element={<VendorChangePassword />} />
        <Route path="support" element={<SupportCenter />} />
      </Route>
    </Routes>
  );
};

export default AppVendor;
