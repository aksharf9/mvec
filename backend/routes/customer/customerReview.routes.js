const express = require('express');
const router = express.Router();
const customerReviewController = require('../../controllers/customer/customerReview.controller');

// Reviews
router.get('/', customerReviewController.getMyReviews);
router.post('/', customerReviewController.submitReview);

module.exports = router;
