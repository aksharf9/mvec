

// routes/vendor.routes.js
const express = require("express");
const router = express.Router();
const { getAllVendors, getVendorById, updateVendor, deleteVendor } = require("../controllers/vendor.controller");

router.get("/", getAllVendors);
router.get("/:id", getVendorById);
router.put("/:id", updateVendor);
router.delete("/:id", deleteVendor);

module.exports = router;
