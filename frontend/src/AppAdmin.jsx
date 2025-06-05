import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateAdminRoute from "./components/PrivateAdminRoute";

// Dashboard
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";

// Vendor Management
import VendorList from "./pages/Admin/VendorManagement/VendorList";
import VendorDetails from "./pages/Admin/VendorManagement/VendorDetails";

// Customer Management
import CustomerList from "./pages/Admin/CustomerManagement/CustomerList";
import CustomerDetails from "./pages/Admin/CustomerManagement/CustomerDetails";

// Product Management
import ProductList from "./pages/Admin/ProductManagement/ProductList";
import CategoryList from "./pages/Admin/ProductManagement/CategoryList";
import AttributeList from "./pages/Admin/ProductManagement/AttributeList";
import ProductApprovalQueue from "./pages/Admin/ProductManagement/ProductApprovalQueue";
import ProductReviewList from "./pages/Admin/ProductManagement/ProductReviewList";

// Order Management
import OrderList from "./pages/Admin/OrderManagement/OrderList";
import OrderDetails from "./pages/Admin/OrderManagement/OrderDetails";

// Finance & Payouts
import PlatformEarnings from "./pages/Admin/Finance&Payouts/PlatformEarnings";
import CommissionReports from "./pages/Admin/Finance&Payouts/CommissionReports";
import VendorPayouts from "./pages/Admin/Finance&Payouts/VendorPayouts";
import TransactionLogs from "./pages/Admin/Finance&Payouts/TransactionLogs";

// Platform Settings
import GeneralSettings from "./pages/Admin/PlatformSettings/GeneralSettings";
import PaymentGateways from "./pages/Admin/PlatformSettings/PaymentGateways";
import ShippingMethods from "./pages/Admin/PlatformSettings/ShippingMethods";
import TaxesSettings from "./pages/Admin/PlatformSettings/TaxSettings";
import EmailTemplates from "./pages/Admin/PlatformSettings/EmailTemplates";
import Currencies from "./pages/Admin/PlatformSettings/CurrencySettings";
import Languages from "./pages/Admin/PlatformSettings/LanguageSettings";

// Marketing & Promotions
import PlatformCoupons from "./pages/Admin/Marketing/PlatformCoupons";
import NewsletterManagement from "./pages/Admin/Marketing/NewsletterManager";

// Content Management
import CMSPages from "./pages/Admin/ContentManagement/PagesCMS";
import BlogManagement from "./pages/Admin/ContentManagement/BlogManager";

// Reports & Analytics
import SalesReports from "./pages/Admin/Reports/SalesReports";
import TrafficAnalytics from "./pages/Admin/Reports/TrafficAnalytics";
import VendorPerformanceReports from "./pages/Admin/Reports/VendorPerformance";

// System & Support
import AdminUserRoles from "./pages/Admin/System&Support/AdminUsers";
import SupportTickets from "./pages/Admin/System&Support/SupportTickets";
import SystemLogs from "./pages/Admin/System&Support/SystemLogs";

function AppAdmin() {
  return (
    <Router>
      <Routes>

        {/* Dashboard */}
        <Route path="/Admin/Dashboard" element={<PrivateAdminRoute><AdminDashboard /></PrivateAdminRoute>} />

        {/* Vendor Management */}
        <Route path="/Admin/Vendors" element={<PrivateAdminRoute><VendorList /></PrivateAdminRoute>} />
        <Route path="/Admin/VendorDetails/:id" element={<PrivateAdminRoute><VendorDetails /></PrivateAdminRoute>} />

        {/* Customer Management */}
        <Route path="/Admin/Customers" element={<PrivateAdminRoute><CustomerList /></PrivateAdminRoute>} />
        <Route path="/Admin/CustomerDetails/:id" element={<PrivateAdminRoute><CustomerDetails /></PrivateAdminRoute>} />

        {/* Product Management */}
        <Route path="/Admin/Products" element={<PrivateAdminRoute><ProductList /></PrivateAdminRoute>} />
        <Route path="/Admin/Categories" element={<PrivateAdminRoute><CategoryList /></PrivateAdminRoute>} />
        <Route path="/Admin/Attributes" element={<PrivateAdminRoute><AttributeList /></PrivateAdminRoute>} />
        <Route path="/Admin/ProductApprovals" element={<PrivateAdminRoute><ProductApprovalQueue /></PrivateAdminRoute>} />
        <Route path="/Admin/ProductReviews" element={<PrivateAdminRoute><ProductReviewList /></PrivateAdminRoute>} />

        {/* Order Management */}
        <Route path="/Admin/Orders" element={<PrivateAdminRoute><OrderList /></PrivateAdminRoute>} />
        <Route path="/Admin/OrderDetails/:id" element={<PrivateAdminRoute><OrderDetails /></PrivateAdminRoute>} />

        {/* Finance & Payouts */}
        <Route path="/Admin/Finance" element={<PrivateAdminRoute><PlatformEarnings /></PrivateAdminRoute>} />
        <Route path="/Admin/Commissions" element={<PrivateAdminRoute><CommissionReports /></PrivateAdminRoute>} />
        <Route path="/Admin/Payouts" element={<PrivateAdminRoute><VendorPayouts /></PrivateAdminRoute>} />
        <Route path="/Admin/Transactions" element={<PrivateAdminRoute><TransactionLogs /></PrivateAdminRoute>} />

        {/* Platform Settings */}
        <Route path="/Admin/Settings/General" element={<PrivateAdminRoute><GeneralSettings /></PrivateAdminRoute>} />
        <Route path="/Admin/Settings/Payments" element={<PrivateAdminRoute><PaymentGateways /></PrivateAdminRoute>} />
        <Route path="/Admin/Settings/Shipping" element={<PrivateAdminRoute><ShippingMethods /></PrivateAdminRoute>} />
        <Route path="/Admin/Settings/Taxes" element={<PrivateAdminRoute><TaxesSettings /></PrivateAdminRoute>} />
        <Route path="/Admin/Settings/Emails" element={<PrivateAdminRoute><EmailTemplates /></PrivateAdminRoute>} />
        <Route path="/Admin/Settings/Currencies" element={<PrivateAdminRoute><Currencies /></PrivateAdminRoute>} />
        <Route path="/Admin/Settings/Languages" element={<PrivateAdminRoute><Languages /></PrivateAdminRoute>} />

        {/* Marketing */}
        <Route path="/Admin/Marketing/Coupons" element={<PrivateAdminRoute><PlatformCoupons /></PrivateAdminRoute>} />
        <Route path="/Admin/Marketing/Newsletter" element={<PrivateAdminRoute><NewsletterManagement /></PrivateAdminRoute>} />

        {/* CMS */}
        <Route path="/Admin/CMS/Pages" element={<PrivateAdminRoute><CMSPages /></PrivateAdminRoute>} />
        <Route path="/Admin/CMS/Blog" element={<PrivateAdminRoute><BlogManagement /></PrivateAdminRoute>} />

        {/* Reports */}
        <Route path="/Admin/Reports/Sales" element={<PrivateAdminRoute><SalesReports /></PrivateAdminRoute>} />
        <Route path="/Admin/Reports/Traffic" element={<PrivateAdminRoute><TrafficAnalytics /></PrivateAdminRoute>} />
        <Route path="/Admin/Reports/VendorPerformance" element={<PrivateAdminRoute><VendorPerformanceReports /></PrivateAdminRoute>} />

        {/* System & Support */}
        <Route path="/Admin/System/Users" element={<PrivateAdminRoute><AdminUserRoles /></PrivateAdminRoute>} />
        <Route path="/Admin/System/Tickets" element={<PrivateAdminRoute><SupportTickets /></PrivateAdminRoute>} />
        <Route path="/Admin/System/Logs" element={<PrivateAdminRoute><SystemLogs /></PrivateAdminRoute>} />

      </Routes>
    </Router>
  );
}

export default AppAdmin;
