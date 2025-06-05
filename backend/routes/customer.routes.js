const express = require('express');
const router = express.Router();
const customerAdminCtrl = require('../controllers/admin/customer.controller');

// GET all customers
router.get('/', customerCtrl.getAllCustomers);

// GET single customer
router.get('/:id', customerCtrl.getCustomerById);

module.exports = router;
