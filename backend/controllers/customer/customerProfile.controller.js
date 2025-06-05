const db = require('../../config/db.config');
const bcrypt = require('bcrypt');

// Get current customer profile
exports.getProfile = async (req, res) => {
  const userId = req.user.userId;

  try {
    const [[user]] = await db.promise().query(
      "SELECT id, name, email, phone, address FROM users WHERE id = ? AND role = 'customer'",
      [userId]
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Update profile fields
exports.updateProfile = async (req, res) => {
  const userId = req.user.userId;
  const { name, phone, address } = req.body;

  try {
    await db.promise().query(
      "UPDATE users SET name=?, phone=?, address=? WHERE id=? AND role='customer'",
      [name, phone, address, userId]
    );
    res.json({ message: "Profile updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Change password
exports.changePassword = async (req, res) => {
  const userId = req.user.userId;
  const { current_password, new_password } = req.body;

  try {
    const [[user]] = await db.promise().query(
      "SELECT password FROM users WHERE id = ? AND role = 'customer'",
      [userId]
    );

    const match = await bcrypt.compare(current_password, user.password);
    if (!match) return res.status(401).json({ message: "Current password incorrect" });

    const hashed = await bcrypt.hash(new_password, 10);
    await db.promise().query(
      "UPDATE users SET password = ? WHERE id = ?",
      [hashed, userId]
    );

    res.json({ message: "Password changed" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
