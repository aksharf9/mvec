const express = require("express");
const router = express.Router();
const {
  getAllCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  getSubscribers,
  addSubscriber
} = require("../controllers/marketing.controller");

// Coupons
router.get("/coupons", getAllCoupons);
router.post("/coupons", createCoupon);
router.put("/coupons/:id", updateCoupon);
router.delete("/coupons/:id", deleteCoupon);

// Newsletter
router.get("/newsletter", getSubscribers);
router.post("/newsletter", addSubscriber);

module.exports = router;







const express = require('express');
const marketingController = require('../controllers/marketing.controller');

// Coupons
router.get('/coupons', marketingController.getAllCoupons);
router.post('/coupons', marketingController.createCoupon);
router.put('/coupons/:id', marketingController.updateCoupon);
router.delete('/coupons/:id', marketingController.deleteCoupon);

// Newsletter
router.get('/newsletter', marketingController.getSubscribers);
router.post('/newsletter', marketingController.addSubscriber);
router.delete('/newsletter/:id', marketingController.removeSubscriber);

module.exports = router;
