const express = require("express");
const router = express.Router();
const {
  getUserAddresses,
  createAddress,
  deleteAddress
} = require("../controllers/address.controller");

router.get("/user/:userId", getUserAddresses);
router.post("/", createAddress);
router.delete("/:id", deleteAddress);

module.exports = router;
