const db = require('../config/db.config');

// Get vendor overview stats
exports.getVendorOverview = async (req, res) => {
  const vendorId = req.user.vendorId; // assume middleware adds this

  try {
    const [[productCount]] = await db.promise().query(
      "SELECT COUNT(*) AS total_products FROM products WHERE vendor_id = ?",
      [vendorId]
    );

    const [[orderCount]] = await db.promise().query(
      `SELECT COUNT(DISTINCT o.id) AS total_orders
       FROM orders o
       JOIN order_items oi ON o.id = oi.order_id
       WHERE oi.vendor_id = ?`,
      [vendorId]
    );

    const [[totalEarnings]] = await db.promise().query(
      `SELECT SUM(oi.quantity * oi.price) AS total_sales
       FROM order_items oi
       WHERE oi.vendor_id = ?`,
      [vendorId]
    );

    res.json({
      total_products: productCount.total_products,
      total_orders: orderCount.total_orders,
      total_sales: totalEarnings.total_sales || 0
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
