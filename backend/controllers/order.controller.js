const db = require('../config/db.config');

// Place a new order
exports.placeOrder = async (req, res) => {
  const { product_id, quantity, address, lat, lng } = req.body;
  try {
    await db.execute(
      'INSERT INTO orders (user_id, product_id, quantity, address, lat, lng) VALUES (?, ?, ?, ?, ?, ?)',
      [req.user.userId, product_id, quantity, address, lat, lng]
    );
    res.status(201).json({ message: 'Order placed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get orders for the logged-in customer
exports.getMyOrders = async (req, res) => {
  try {
    const [orders] = await db.execute(
      'SELECT * FROM orders WHERE user_id = ?',
      [req.user.userId]
    );
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get orders related to the logged-in vendor
exports.getVendorOrders = async (req, res) => {
  try {
    const [orders] = await db.execute(
      `SELECT o.* FROM orders o 
       JOIN products p ON o.product_id = p.id 
       WHERE p.vendor_id = ?`, 
      [req.user.userId]
    );
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update order status (Admin or Vendor)
exports.updateOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  const validStatuses = ["pending", "processing", "shipped", "delivered", "cancelled"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    const [result] = await db.execute(
      "UPDATE orders SET status = ? WHERE id = ?",
      [status, orderId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
