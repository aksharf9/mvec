const express = require("express");
const router = express.Router();
const {
  getSalesReport,
  getVendorReport,
  getCustomerReport,
  getTopProducts,
  getCommissionReport
} = require("../controllers/reports.controller");

// Sales overview (by date range or monthly)
router.get("/sales", getSalesReport);

// Earnings and commission by vendor
router.get("/vendors", getVendorReport);

// Order summary by customer
router.get("/customers", getCustomerReport);

// Top products sold
router.get("/top-products", getTopProducts);

// Commission + monthly fee by vendor
router.get("/commissions", getCommissionReport);

module.exports = router;

const express = require('express');
const reportsController = require('../controllers/reports.controller');

// Sales Reports
router.get('/sales', reportsController.getSalesReport);

// Customer Reports
router.get('/customers', reportsController.getCustomerReport);

// Product Reports
router.get('/products', reportsController.getProductReport);

// Commission Reports
router.get('/commissions', reportsController.getCommissionReport);

module.exports = router;
