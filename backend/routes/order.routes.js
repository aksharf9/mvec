const express = require("express");
const router = express.Router();
const {
  placeOrder,        
  getMyOrders,       
  getVendorOrders,   
  updateOrderStatus  // ✅ Added function
} = require("../controllers/order.controller");

// Place a new order
router.post("/", placeOrder);

// Get orders for logged-in user
router.get("/my-orders", getMyOrders);

// Get all orders for a vendor
router.get("/vendor-orders", getVendorOrders);

// ✅ Update order status by Admin or Vendor
router.put("/:id/status", updateOrderStatus);

module.exports = router;
