const db = require('../config/db.config');

// Get all orders that include this vendor's products
exports.getVendorOrders = async (req, res) => {
  const vendorId = req.user.vendorId;

  try {
    const [orders] = await db.promise().query(
      `SELECT DISTINCT o.id, o.user_id, o.total_amount, o.created_at
       FROM orders o
       JOIN order_items oi ON o.id = oi.order_id
       WHERE oi.vendor_id = ?
       ORDER BY o.created_at DESC`,
      [vendorId]
    );
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Get order details (only this vendor's items)
exports.getOrderDetails = async (req, res) => {
  const vendorId = req.user.vendorId;
  const { orderId } = req.params;

  try {
    const [items] = await db.promise().query(
      `SELECT oi.*, p.name AS product_name
       FROM order_items oi
       JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = ? AND oi.vendor_id = ?`,
      [orderId, vendorId]
    );
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Update delivery status of individual order item
exports.updateOrderItemStatus = async (req, res) => {
  const vendorId = req.user.vendorId;
  const { orderItemId } = req.params;
  const { delivery_status } = req.body;

  try {
    const [result] = await db.promise().query(
      `UPDATE order_items 
       SET delivery_status = ?
       WHERE id = ? AND vendor_id = ?`,
      [delivery_status, orderItemId, vendorId]
    );
    if (result.affectedRows === 0)
      return res.status(403).json({ message: "Unauthorized or not found" });

    res.json({ message: "Order status updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
