const express = require("express");
const router = express.Router();
const {
  getFinanceDashboard,
  getCommissions,
  createCommission,
  getPayouts,
  createPayout,
  getTransactions
} = require("../controllers/finance.controller");

// Finance Summary
router.get("/dashboard", getFinanceDashboard);

// Commissions
router.get("/commissions", getCommissions);
router.post("/commissions", createCommission);

// Payouts
router.get("/payouts", getPayouts);
router.post("/payouts", createPayout);

// Transactions
router.get("/transactions", getTransactions);

module.exports = router;
