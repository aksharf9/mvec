const express = require('express');
const router = express.Router();
const customerProfileController = require('../../controllers/customer/customerProfile.controller');

// Profile
router.get('/', customerProfileController.getProfile);
router.put('/', customerProfileController.updateProfile);

// Password change
router.put('/password', customerProfileController.changePassword);

module.exports = router;
