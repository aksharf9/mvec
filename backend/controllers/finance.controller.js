const db = require("../config/db.config");

// Dashboard: Summary of finance
exports.getFinanceDashboard = async (req, res) => {
  try {
    const [[commissionSum]] = await db.execute("SELECT SUM(amount) AS total_commission FROM commissions");
    const [[payoutSum]] = await db.execute("SELECT SUM(amount) AS total_payouts FROM payouts WHERE status = 'paid'");
    const [[pendingSum]] = await db.execute("SELECT SUM(amount) AS pending_payouts FROM payouts WHERE status = 'pending'");

    res.json({
      total_commission: commissionSum.total_commission || 0,
      total_payouts: payoutSum.total_payouts || 0,
      pending_payouts: pendingSum.pending_payouts || 0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all commissions
exports.getCommissions = async (req, res) => {
  try {
    const [commissions] = await db.execute("SELECT * FROM commissions");
    res.json(commissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new commission entry
exports.createCommission = async (req, res) => {
  const { vendor_id, order_id, amount, monthly_fee, type, status } = req.body;
  try {
    await db.execute(
      `INSERT INTO commissions (vendor_id, order_id, amount, monthly_fee, type, status) VALUES (?, ?, ?, ?, ?, ?)`,
      [vendor_id, order_id, amount, monthly_fee || 0, type || 'order', status || 'unpaid']
    );

    // Optionally, log this in transactions
    await db.execute(
      `INSERT INTO transactions (type, order_id, vendor_id, amount, reference_note) VALUES (?, ?, ?, ?, ?)`,
      ['commission', order_id, vendor_id, amount, 'Commission recorded']
    );

    res.status(201).json({ message: "Commission recorded" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all payouts
exports.getPayouts = async (req, res) => {
  try {
    const [payouts] = await db.execute("SELECT * FROM payouts");
    res.json(payouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a payout
exports.createPayout = async (req, res) => {
  const { vendor_id, amount, payout_method, reference_note, status } = req.body;
  try {
    await db.execute(
      `INSERT INTO payouts (vendor_id, amount, payout_method, reference_note, status) VALUES (?, ?, ?, ?, ?)`,
      [vendor_id, amount, payout_method, reference_note || '', status || 'pending']
    );

    // Log to transactions
    await db.execute(
      `INSERT INTO transactions (type, vendor_id, amount, reference_note) VALUES (?, ?, ?, ?)`,
      ['payout', vendor_id, amount, `Payout via ${payout_method}`]
    );

    res.status(201).json({ message: "Payout created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const [transactions] = await db.execute("SELECT * FROM transactions ORDER BY created_at DESC");
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
