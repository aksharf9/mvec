const db = require('../config/db.config');

// ✅ Create product (Vendor only)
exports.createProduct = async (req, res) => {
  const { name, price, description, stock, category } = req.body;
  try {
    await db.execute(
      'INSERT INTO products (name, price, description, stock, category, vendor_id) VALUES (?, ?, ?, ?, ?, ?)',
      [name, price, description, stock, category, req.user.userId]
    );
    res.status(201).json({ message: 'Product created' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await db.execute('SELECT * FROM products');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const [product] = await db.execute('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (product.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(product[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update product (Vendor only)
exports.updateProduct = async (req, res) => {
  const { name, price, description, stock, category } = req.body;
  try {
    await db.execute(
      'UPDATE products SET name = ?, price = ?, description = ?, stock = ?, category = ? WHERE id = ? AND vendor_id = ?',
      [name, price, description, stock, category, req.params.id, req.user.userId]
    );
    res.json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete product (Vendor only)
exports.deleteProduct = async (req, res) => {
  try {
    await db.execute('DELETE FROM products WHERE id = ? AND vendor_id = ?', [req.params.id, req.user.userId]);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Toggle approval (Super Admin only)
exports.toggleApproval = async (req, res) => {
  try {
    const [product] = await db.execute('SELECT isApproved FROM products WHERE id = ?', [req.params.id]);
    if (product.length === 0) return res.status(404).json({ message: 'Product not found' });

    const newStatus = !product[0].isApproved;
    await db.execute('UPDATE products SET isApproved = ? WHERE id = ?', [newStatus, req.params.id]);

    res.json({ message: `Product ${newStatus ? 'approved' : 'disapproved'}`, isApproved: newStatus });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
