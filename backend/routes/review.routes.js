const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review.controller");

// ✅ Get all reviews (Super Admin - Aggregated feedback)
router.get("/", reviewController.getAllReviews);

// ✅ Create a new review
router.post("/", reviewController.createReview);

// ✅ Get all reviews for a specific product
router.get("/product/:product_id", reviewController.getReviewsByProduct);

// ✅ Update a review
router.put("/:review_id", reviewController.updateReview);

// ✅ Delete a review
router.delete("/:review_id", reviewController.deleteReview);

module.exports = router;
