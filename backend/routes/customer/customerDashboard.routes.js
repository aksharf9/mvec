const express = require('express');
const router = express.Router();
const customerDashboardController = require('../../controllers/customer/customerDashboard.controller');

// GET /api/customer/dashboard/overview
router.get('/overview', customerDashboardController.getCustomerOverview);

module.exports = router;
