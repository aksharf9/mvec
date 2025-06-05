const db = require('../config/db.config');

exports.getSummary = async (req, res) => {
  try {
    const [[userCount]] = await db.execute('SELECT COUNT(*) AS users FROM users');
    const [[productCount]] = await db.execute('SELECT COUNT(*) AS products FROM products');
    const [[orderCount]] = await db.execute('SELECT COUNT(*) AS orders FROM orders');

    res.json({
      totalUsers: userCount.users,
      totalProducts: productCount.products,
      totalOrders: orderCount.orders,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
