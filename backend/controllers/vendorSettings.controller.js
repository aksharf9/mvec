const db = require('../config/db.config');
const bcrypt = require('bcrypt');

// Get current vendor profile
exports.getVendorProfile = async (req, res) => {
  const vendorId = req.user.vendorId;

  try {
    const [[vendor]] = await db.promise().query(
      "SELECT id, name, email, phone, address FROM vendors WHERE id = ?",
      [vendorId]
    );
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Update vendor profile
exports.updateVendorProfile = async (req, res) => {
  const vendorId = req.user.vendorId;
  const { name, phone, address } = req.body;

  try {
    await db.promise().query(
      "UPDATE vendors SET name=?, phone=?, address=? WHERE id = ?",
      [name, phone, address, vendorId]
    );
    res.json({ message: "Profile updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Change vendor password
exports.changeVendorPassword = async (req, res) => {
  const vendorId = req.user.vendorId;
  const { current_password, new_password } = req.body;

  try {
    const [[vendor]] = await db.promise().query(
      "SELECT password FROM vendors WHERE id = ?",
      [vendorId]
    );

    const match = await bcrypt.compare(current_password, vendor.password);
    if (!match) return res.status(401).json({ message: "Current password incorrect" });

    const hashed = await bcrypt.hash(new_password, 10);
    await db.promise().query("UPDATE vendors SET password=? WHERE id=?", [hashed, vendorId]);

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
