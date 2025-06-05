const express = require('express');
const router = express.Router();
const vendorSettingsController = require('../controllers/vendorSettings.controller');

// Vendor profile
router.get('/profile', vendorSettingsController.getVendorProfile);
router.put('/profile', vendorSettingsController.updateVendorProfile);

// Password
router.put('/password', vendorSettingsController.changeVendorPassword);

module.exports = router;
