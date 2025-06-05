const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

// Dashboard home data
router.get("/summary", dashboardController.getSummary);

// Add more dashboard-related routes if needed, e.g., stats, charts
// router.get("/sales", dashboardController.getSalesStats);

module.exports = router;
