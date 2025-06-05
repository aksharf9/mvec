const express = require('express');
const router = express.Router();
const vendorOrderController = require('../controllers/vendorOrder.controller');

// Orders for this vendor
router.get('/', vendorOrderController.getVendorOrders);
router.get('/:orderId', vendorOrderController.getOrderDetails);
router.put('/status/:orderItemId', vendorOrderController.updateOrderItemStatus);

module.exports = router;
