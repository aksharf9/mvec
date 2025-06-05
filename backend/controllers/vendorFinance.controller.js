const db = require('../config/db.config');

exports.getFinanceSummary = async (req, res) => {
  const vendorId = req.user.vendorId;

  try {
    const [[summary]] = await db.promise().query(
      `SELECT 
         COALESCE(SUM(oi.price * oi.quantity), 0) AS total_sales,
         COALESCE(SUM(c.commission_amount), 0) AS total_commissions,
         COALESCE(SUM(p.amount), 0) AS total_paid
       FROM order_items oi
       LEFT JOIN commissions c ON oi.order_id = c.order_id AND c.vendor_id = oi.vendor_id
       LEFT JOIN payouts p ON c.vendor_id = p.vendor_id
       WHERE oi.vendor_id = ?`,
      [vendorId]
    );

    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getCommissionBreakdown = async (req, res) => {
  const vendorId = req.user.vendorId;

  try {
    const [data] = await db.promise().query(
      `SELECT 
         c.order_id, c.commission_amount, c.monthly_fee, o.created_at
       FROM commissions c
       JOIN orders o ON c.order_id = o.id
       WHERE c.vendor_id = ?
       ORDER BY o.created_at DESC`,
      [vendorId]
    );

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPayoutHistory = async (req, res) => {
  const vendorId = req.user.vendorId;

  try {
    const [data] = await db.promise().query(
      `SELECT id, amount, status, created_at
       FROM payouts
       WHERE vendor_id = ?
       ORDER BY created_at DESC`,
      [vendorId]
    );

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
