const db = require('../config/db.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// REGISTER (admin only)
exports.registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) return res.status(400).json({ message: 'All fields are required' });

  const [exists] = await db.execute('SELECT id FROM users WHERE email = ?', [email]);
  if (exists.length > 0) return res.status(400).json({ message: 'Email already exists' });

  const hash = await bcrypt.hash(password, 10);

  await db.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, hash, 'admin']
  );

  res.status(201).json({ message: 'Admin registered successfully' });
};

// LOGIN
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.execute('SELECT * FROM users WHERE email = ? AND role = ?', [email, 'admin']);
  const admin = rows[0];

  if (!admin) return res.status(401).json({ message: 'Admin not found' });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: admin.id, role: 'admin' }, 'your_jwt_secret', { expiresIn: '1d' });

  res.json({ token });
};

// PROTECTED TEST
exports.getAdminProfile = (req, res) => {
  res.json({ message: 'Welcome Admin', userId: req.user.userId });
};
