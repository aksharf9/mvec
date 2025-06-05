const db = require("../config/db.config");

// 🧾 System Logs
exports.getSystemLogs = async (req, res) => {
  try {
    const [logs] = await db.execute(`
      SELECT l.*, u.name AS user_name
      FROM system_logs l
      LEFT JOIN users u ON l.user_id = u.id
      ORDER BY l.created_at DESC
    `);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🛑 Error Logs
exports.getErrorLogs = async (req, res) => {
  try {
    const [errors] = await db.execute("SELECT * FROM error_logs ORDER BY created_at DESC");
    res.json(errors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📩 Support Tickets
exports.getSupportTickets = async (req, res) => {
  try {
    const [tickets] = await db.execute(`
      SELECT t.*, u.name AS user_name, u.email
      FROM support_tickets t
      JOIN users u ON t.user_id = u.id
      ORDER BY t.created_at DESC
    `);
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Respond to a ticket
exports.respondToTicket = async (req, res) => {
  const { id } = req.params;
  const { response, status } = req.body;

  try {
    await db.execute(
      `UPDATE support_tickets SET response = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      [response, status || 'resolved', id]
    );
    res.json({ message: "Response submitted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
