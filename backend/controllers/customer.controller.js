const db = require('../../config/db.config');

// Get all customers
exports.getAllCustomers = (req, res) => {
  db.query(
    'SELECT id, name, email, phone, created_at FROM users WHERE role = "customer"',
    (err, results) => {
      if (err) return res.status(500).json({ message: 'Error fetching customers', err });
      res.json(results);
    }
  );
};

// Get single customer by ID
exports.getCustomerById = (req, res) => {
  const id = req.params.id;
  db.query(
    'SELECT id, name, email, phone, created_at FROM users WHERE id = ? AND role = "customer"',
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: 'Error fetching customer', err });
      if (results.length === 0) return res.status(404).json({ message: 'Customer not found' });
      res.json(results[0]);
    }
  );
};
