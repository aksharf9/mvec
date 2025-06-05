const express = require('express');
const router = express.Router();
const vendorDashboardController = require('../controllers/vendorDashboard.controller');

// Overview for logged-in vendor
router.get('/overview', vendorDashboardController.getVendorOverview);

module.exports = router;
