const db = require("../config/db.config");

// ✅ Create a new review
exports.createReview = (req, res) => {
  const { product_id, user_id, rating, comment } = req.body;

  if (!product_id || !user_id || !rating) {
    return res.status(400).json({ message: "Product ID, User ID, and Rating are required." });
  }

  const review = { product_id, user_id, rating, comment };

  db.query("INSERT INTO reviews SET ?", review, (err, result) => {
    if (err) return res.status(500).json({ message: "Error creating review", error: err });
    res.status(201).json({ message: "Review created successfully", reviewId: result.insertId });
  });
};

// ✅ Get all reviews for a specific product
exports.getReviewsByProduct = (req, res) => {
  const { product_id } = req.params;

  db.query(
    `SELECT r.*, u.name AS user_name 
     FROM reviews r 
     JOIN users u ON r.user_id = u.id 
     WHERE r.product_id = ?`,
    [product_id],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Error retrieving reviews", error: err });
      res.json(results);
    }
  );
};

// ✅ Update a review
exports.updateReview = (req, res) => {
  const { review_id } = req.params;
  const { rating, comment } = req.body;

  db.query(
    "UPDATE reviews SET rating = ?, comment = ? WHERE id = ?",
    [rating, comment, review_id],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Error updating review", error: err });
      res.json({ message: "Review updated successfully" });
    }
  );
};

// ✅ Delete a review
exports.deleteReview = (req, res) => {
  const { review_id } = req.params;

  db.query("DELETE FROM reviews WHERE id = ?", [review_id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error deleting review", error: err });
    res.json({ message: "Review deleted successfully" });
  });
};

// ✅ Get all reviews (for Super Admin)
exports.getAllReviews = (req, res) => {
  db.query(
    `SELECT r.*, 
            u.name AS user_name, 
            p.name AS product_name 
     FROM reviews r 
     JOIN users u ON r.user_id = u.id 
     JOIN products p ON r.product_id = p.id 
     ORDER BY r.created_at DESC`,
    (err, results) => {
      if (err) return res.status(500).json({ message: "Error retrieving all reviews", error: err });
      res.json(results);
    }
  );
};
