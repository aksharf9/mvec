const db = require('../config/db.config');

const query = (sql, values = []) =>
  new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

// ----- FAQ MANAGEMENT -----
exports.getAllFaqs = async (req, res) => {
  try {
    const data = await query("SELECT * FROM faqs ORDER BY id DESC");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createFaq = async (req, res) => {
  const { question, answer } = req.body;
  try {
    await query("INSERT INTO faqs (question, answer) VALUES (?, ?)", [question, answer]);
    res.status(201).json({ message: "FAQ created" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateFaq = async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  try {
    await query("UPDATE faqs SET question=?, answer=? WHERE id=?", [question, answer, id]);
    res.json({ message: "FAQ updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteFaq = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM faqs WHERE id=?", [id]);
    res.json({ message: "FAQ deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// ----- SUPPORT TICKET HISTORY -----
exports.getAllTickets = async (req, res) => {
  try {
    const data = await query(`
      SELECT 
        t.id, t.subject, t.message, t.status, t.created_at,
        u.name AS user_name, u.email AS user_email
      FROM support_tickets t
      JOIN users u ON t.user_id = u.id
      ORDER BY t.created_at DESC
    `);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
