const express = require('express');
const router = express.Router();
const supportController = require('../controllers/support.controller');

// FAQs
router.get('/faqs', supportController.getAllFaqs);
router.post('/faqs', supportController.createFaq);
router.put('/faqs/:id', supportController.updateFaq);
router.delete('/faqs/:id', supportController.deleteFaq);

// Support Tickets (view only)
router.get('/tickets', supportController.getAllTickets);

module.exports = router;
