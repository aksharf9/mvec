const db = require("../config/db.config");

// 1️⃣ Sales Report
exports.getSalesReport = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
        DATE(created_at) AS date,
        COUNT(*) AS total_orders,
        SUM(total_amount) AS total_sales
      FROM orders
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2️⃣ Vendor Report
exports.getVendorReport = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
        v.id AS vendor_id,
        v.name AS vendor_name,
        SUM(o.total_amount) AS total_earned,
        SUM(c.amount + c.monthly_fee) AS total_commission
      FROM vendors v
      LEFT JOIN orders o ON v.id = o.vendor_id
      LEFT JOIN commissions c ON v.id = c.vendor_id
      GROUP BY v.id
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3️⃣ Customer Report
exports.getCustomerReport = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
        u.id AS customer_id,
        u.name AS customer_name,
        COUNT(o.id) AS total_orders,
        SUM(o.total_amount) AS total_spent
      FROM users u
      JOIN orders o ON u.id = o.user_id
      GROUP BY u.id
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 4️⃣ Top Products
exports.getTopProducts = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
        p.id,
        p.name,
        COUNT(o.id) AS times_ordered
      FROM products p
      JOIN orders o ON p.id = o.product_id
      GROUP BY p.id
      ORDER BY times_ordered DESC
      LIMIT 10
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 5️⃣ Commission Report
exports.getCommissionReport = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
        vendor_id,
        SUM(amount) AS total_commission,
        SUM(monthly_fee) AS total_monthly_fee
      FROM commissions
      GROUP BY vendor_id
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};






const db = require('../config/db.config');

const query = (sql, values = []) =>
  new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

// ----- SALES REPORT -----
exports.getSalesReport = async (req, res) => {
  try {
    const data = await query(`
      SELECT 
        DATE(created_at) AS date,
        COUNT(*) AS total_orders,
        SUM(total_amount) AS total_sales
      FROM orders
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// ----- CUSTOMER REPORT -----
exports.getCustomerReport = async (req, res) => {
  try {
    const data = await query(`
      SELECT 
        u.id, u.name, u.email, COUNT(o.id) AS total_orders, SUM(o.total_amount) AS total_spent
      FROM users u
      LEFT JOIN orders o ON u.id = o.user_id
      WHERE u.role = 'customer'
      GROUP BY u.id
    `);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// ----- PRODUCT REPORT -----
exports.getProductReport = async (req, res) => {
  try {
    const data = await query(`
      SELECT 
        p.id, p.name, COUNT(oi.product_id) AS units_sold, SUM(oi.quantity * oi.price) AS revenue
      FROM products p
      JOIN order_items oi ON p.id = oi.product_id
      GROUP BY p.id
    `);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// ----- COMMISSION REPORT -----
exports.getCommissionReport = async (req, res) => {
  try {
    const data = await query(`
      SELECT 
        v.id, v.name AS vendor_name,
        SUM(c.commission_amount) AS total_commission,
        SUM(c.monthly_fee) AS total_monthly_fee
      FROM vendors v
      LEFT JOIN commissions c ON v.id = c.vendor_id
      GROUP BY v.id
    `);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
