// controllers/user.controller.js
const db = require("../config/db.config");

// Function to get all users
exports.getAllUsers = (req, res) => {
  db.query("SELECT id, name, email, role FROM users", (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
};

// Function to get a user by ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;
  db.query("SELECT id, name, email, role FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(results[0]);
  });
};
