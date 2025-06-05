const express = require('express');
const router = express.Router();
const vendorSupportController = require('../controllers/vendorSupport.controller');

// Support tickets
router.get('/', vendorSupportController.getMyTickets);
router.post('/', vendorSupportController.submitTicket);

module.exports = router;
