const db = require('../../config/db.config');

// View wishlist
exports.getWishlist = async (req, res) => {
  const userId = req.user.userId;

  try {
    const [wishlist] = await db.promise().query(
      `SELECT w.product_id, p.name, p.image, p.price
       FROM wishlist w
       JOIN products p ON w.product_id = p.id
       WHERE w.user_id = ?`,
      [userId]
    );
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Add to wishlist
exports.addToWishlist = async (req, res) => {
  const userId = req.user.userId;
  const { product_id } = req.body;

  if (!product_id) return res.status(400).json({ message: "Product ID is required" });

  try {
    const [[exists]] = await db.promise().query(
      "SELECT id FROM wishlist WHERE user_id = ? AND product_id = ?",
      [userId, product_id]
    );
    if (exists) return res.status(400).json({ message: "Already in wishlist" });

    await db.promise().query(
      "INSERT INTO wishlist (user_id, product_id) VALUES (?, ?)",
      [userId, product_id]
    );
    res.status(201).json({ message: "Added to wishlist" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Remove from wishlist
exports.removeFromWishlist = async (req, res) => {
  const userId = req.user.userId;
  const { productId } = req.params;

  try {
    await db.promise().query(
      "DELETE FROM wishlist WHERE user_id = ? AND product_id = ?",
      [userId, productId]
    );
    res.json({ message: "Removed from wishlist" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
