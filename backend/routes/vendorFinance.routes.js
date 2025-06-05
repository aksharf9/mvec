const express = require('express');
const router = express.Router();
const vendorFinanceController = require('../controllers/vendorFinance.controller');

// Finance Overview
router.get('/summary', vendorFinanceController.getFinanceSummary);

// Detailed commissions per order
router.get('/commissions', vendorFinanceController.getCommissionBreakdown);

// Payout history
router.get('/payouts', vendorFinanceController.getPayoutHistory);

module.exports = router;
