const express = require('express');
const router = express.Router();
const customerOrderController = require('../../controllers/customer/customerOrder.controller');

// Get all orders of the customer
router.get('/', customerOrderController.getMyOrders);

// Get single order details
router.get('/:orderId', customerOrderController.getOrderDetails);

module.exports = router;
