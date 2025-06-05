const db = require('../config/db.config');

// Get all products for logged-in vendor
exports.getVendorProducts = async (req, res) => {
  const vendorId = req.user.vendorId;
  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM products WHERE vendor_id = ? ORDER BY created_at DESC",
      [vendorId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Add a new product
exports.createProduct = async (req, res) => {
  const vendorId = req.user.vendorId;
  const {
    name,
    description,
    price,
    category_id,
    stock,
    image
  } = req.body;

  try {
    await db.promise().query(
      `INSERT INTO products 
        (vendor_id, name, description, price, category_id, stock, image, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [vendorId, name, description, price, category_id, stock, image]
    );
    res.status(201).json({ message: "Product created, awaiting approval" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Update existing product
exports.updateProduct = async (req, res) => {
  const vendorId = req.user.vendorId;
  const { id } = req.params;
  const {
    name,
    description,
    price,
    category_id,
    stock,
    image
  } = req.body;

  try {
    const [result] = await db.promise().query(
      `UPDATE products 
       SET name=?, description=?, price=?, category_id=?, stock=?, image=?, status='pending'
       WHERE id=? AND vendor_id=?`,
      [name, description, price, category_id, stock, image, id, vendorId]
    );
    if (result.affectedRows === 0) return res.status(403).json({ message: "Unauthorized or not found" });

    res.json({ message: "Product updated and pending re-approval" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const vendorId = req.user.vendorId;
  const { id } = req.params;

  try {
    const [result] = await db.promise().query(
      "DELETE FROM products WHERE id=? AND vendor_id=?",
      [id, vendorId]
    );
    if (result.affectedRows === 0) return res.status(403).json({ message: "Unauthorized or not found" });

    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
