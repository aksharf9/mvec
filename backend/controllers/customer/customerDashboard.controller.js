const db = require('../../config/db.config');

// GET /api/customer/dashboard/overview
exports.getCustomerOverview = async (req, res) => {
  const userId = req.user.userId;

  try {
    const [[orderStats]] = await db.promise().query(
      `SELECT 
         COUNT(*) AS total_orders,
         COALESCE(SUM(total_amount), 0) AS total_spent
       FROM orders
       WHERE user_id = ?`,
      [userId]
    );

    const [[reviewStats]] = await db.promise().query(
      `SELECT COUNT(*) AS total_reviews FROM reviews WHERE user_id = ?`,
      [userId]
    );

    res.json({
      total_orders: orderStats.total_orders,
      total_spent: orderStats.total_spent,
      total_reviews: reviewStats.total_reviews
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
