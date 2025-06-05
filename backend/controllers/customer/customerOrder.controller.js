const db = require('../../config/db.config');

// List all orders for the logged-in customer
exports.getMyOrders = async (req, res) => {
  const userId = req.user.userId;

  try {
    const [orders] = await db.promise().query(
      `SELECT id, total_amount, address, created_at 
       FROM orders 
       WHERE user_id = ? 
       ORDER BY created_at DESC`,
      [userId]
    );
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Get detailed breakdown of a specific order
exports.getOrderDetails = async (req, res) => {
  const userId = req.user.userId;
  const { orderId } = req.params;

  try {
    const [[order]] = await db.promise().query(
      `SELECT * FROM orders WHERE id = ? AND user_id = ?`,
      [orderId, userId]
    );
    if (!order) return res.status(404).json({ message: "Order not found" });

    const [items] = await db.promise().query(
      `SELECT oi.*, p.name AS product_name, p.image 
       FROM order_items oi
       JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = ?`,
      [orderId]
    );

    res.json({
      order,
      items
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
