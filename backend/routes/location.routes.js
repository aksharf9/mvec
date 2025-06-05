// location.routes.js
const express = require("express");
const router = express.Router();
const locationController = require("../controllers/location.controller");

// Save a location
router.post("/", locationController.saveLocation);

// Get nearby vendors
router.get("/nearby", locationController.getNearbyVendors);

module.exports = router;
