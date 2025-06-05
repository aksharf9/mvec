const db = require("../config/db.config");

// 📦 Coupons

exports.getAllCoupons = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM coupons");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCoupon = async (req, res) => {
  const { code, type, discount, min_order_value, max_uses, expires_at, status } = req.body;

  try {
    await db.execute(
      `INSERT INTO coupons (code, type, discount, min_order_value, max_uses, expires_at, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [code, type, discount, min_order_value || 0, max_uses || 0, expires_at || null, status || 'active']
    );
    res.status(201).json({ message: "Coupon created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCoupon = async (req, res) => {
  const { id } = req.params;
  const { code, type, discount, min_order_value, max_uses, expires_at, status } = req.body;

  try {
    await db.execute(
      `UPDATE coupons SET code = ?, type = ?, discount = ?, min_order_value = ?, max_uses = ?, expires_at = ?, status = ? WHERE id = ?`,
      [code, type, discount, min_order_value, max_uses, expires_at, status, id]
    );
    res.json({ message: "Coupon updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCoupon = async (req, res) => {
  const { id } = req.params;

  try {
    await db.execute("DELETE FROM coupons WHERE id = ?", [id]);
    res.json({ message: "Coupon deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📧 Newsletter

exports.getSubscribers = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addSubscriber = async (req, res) => {
  const { email } = req.body;

  try {
    await db.execute("INSERT INTO newsletter_subscribers (email) VALUES (?)", [email]);
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      res.status(400).json({ message: "Email already subscribed" });
    } else {
      res.status(500).json({ message: err.message });
    }
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

// ----- Coupons -----
exports.getAllCoupons = async (req, res) => {
  try {
    const data = await query("SELECT * FROM coupons");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createCoupon = async (req, res) => {
  const { code, discount_percent, max_usage, expiry_date } = req.body;
  try {
    await query(
      "INSERT INTO coupons (code, discount_percent, max_usage, expiry_date) VALUES (?, ?, ?, ?)",
      [code, discount_percent, max_usage, expiry_date]
    );
    res.status(201).json({ message: "Coupon created" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateCoupon = async (req, res) => {
  const { id } = req.params;
  const { code, discount_percent, max_usage, expiry_date } = req.body;
  try {
    await query(
      "UPDATE coupons SET code=?, discount_percent=?, max_usage=?, expiry_date=? WHERE id=?",
      [code, discount_percent, max_usage, expiry_date, id]
    );
    res.json({ message: "Coupon updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteCoupon = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM coupons WHERE id=?", [id]);
    res.json({ message: "Coupon deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// ----- Newsletter -----
exports.getSubscribers = async (req, res) => {
  try {
    const data = await query("SELECT * FROM newsletter");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.addSubscriber = async (req, res) => {
  const { email } = req.body;
  try {
    await query("INSERT INTO newsletter (email) VALUES (?)", [email]);
    res.status(201).json({ message: "Subscriber added" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.removeSubscriber = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM newsletter WHERE id=?", [id]);
    res.json({ message: "Subscriber removed" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
