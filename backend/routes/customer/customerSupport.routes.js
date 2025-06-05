const express = require('express');
const router = express.Router();
const customerSupportController = require('../../controllers/customer/customerSupport.controller');

// Support
router.get('/', customerSupportController.getMyTickets);
router.post('/', customerSupportController.submitTicket);

module.exports = router;
