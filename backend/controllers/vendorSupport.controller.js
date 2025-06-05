const db = require('../config/db.config');

// Get all support tickets for this vendor
exports.getMyTickets = async (req, res) => {
  const vendorId = req.user.vendorId;

  try {
    const [tickets] = await db.promise().query(
      "SELECT id, subject, message, status, created_at FROM support_tickets WHERE user_id = ? AND user_type = 'vendor' ORDER BY created_at DESC",
      [vendorId]
    );
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Submit a new support ticket
exports.submitTicket = async (req, res) => {
  const vendorId = req.user.vendorId;
  const { subject, message } = req.body;

  try {
    await db.promise().query(
      "INSERT INTO support_tickets (user_id, user_type, subject, message, status) VALUES (?, 'vendor', ?, ?, 'open')",
      [vendorId, subject, message]
    );
    res.status(201).json({ message: "Ticket submitted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
