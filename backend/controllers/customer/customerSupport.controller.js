const db = require('../../config/db.config');

// View all tickets submitted by the customer
exports.getMyTickets = async (req, res) => {
  const userId = req.user.userId;

  try {
    const [tickets] = await db.promise().query(
      `SELECT id, subject, message, status, created_at 
       FROM support_tickets 
       WHERE user_id = ? AND user_type = 'customer'
       ORDER BY created_at DESC`,
      [userId]
    );
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Submit a new support ticket
exports.submitTicket = async (req, res) => {
  const userId = req.user.userId;
  const { subject, message } = req.body;

  if (!subject || !message) {
    return res.status(400).json({ message: "Subject and message are required" });
  }

  try {
    await db.promise().query(
      `INSERT INTO support_tickets (user_id, user_type, subject, message, status) 
       VALUES (?, 'customer', ?, ?, 'open')`,
      [userId, subject, message]
    );
    res.status(201).json({ message: "Ticket submitted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
