const db = require("../config/db.config.js");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.register = (req, res) => {
  const { name, email, password, role } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (results.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ message: "Error hashing password" });

      const user = { name, email, password: hashedPassword, role: role || "user" };

      db.query("INSERT INTO users SET ?", user, (err, result) => {
        if (err) return res.status(500).json({ message: "Error registering user" });

        user.id = result.insertId;
        const token = generateToken(user);
        res.status(201).json({ user: { id: user.id, name, email, role: user.role }, token });
      });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (results.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = results[0];

    // Compare password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: "Error comparing passwords" });

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = generateToken(user);
      res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token });
    });
  });
};
