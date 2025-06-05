const db = require('../../config/db.config');

// Get all reviews by this customer
exports.getMyReviews = async (req, res) => {
  const userId = req.user.userId;

  try {
    const [reviews] = await db.promise().query(
      `SELECT r.id, r.rating, r.comment, r.created_at, p.name AS product_name 
       FROM reviews r
       JOIN products p ON r.product_id = p.id
       WHERE r.user_id = ?
       ORDER BY r.created_at DESC`,
      [userId]
    );
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Submit a new review (only if customer purchased the product)
exports.submitReview = async (req, res) => {
  const userId = req.user.userId;
  const { product_id, rating, comment } = req.body;

  if (!product_id || !rating) {
    return res.status(400).json({ message: "Product ID and rating are required" });
  }

  try {
    // Check if customer purchased the product
    const [[purchase]] = await db.promise().query(
      `SELECT oi.id FROM order_items oi
       JOIN orders o ON oi.order_id = o.id
       WHERE o.user_id = ? AND oi.product_id = ?`,
      [userId, product_id]
    );
    if (!purchase) {
      return res.status(403).json({ message: "You can only review purchased products" });
    }

    // Check if already reviewed
    const [[existing]] = await db.promise().query(
      "SELECT id FROM reviews WHERE user_id = ? AND product_id = ?",
      [userId, product_id]
    );
    if (existing) {
      return res.status(400).json({ message: "You have already reviewed this product" });
    }

    await db.promise().query(
      "INSERT INTO reviews (user_id, product_id, rating, comment) VALUES (?, ?, ?, ?)",
      [userId, product_id, rating, comment]
    );

    res.status(201).json({ message: "Review submitted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
