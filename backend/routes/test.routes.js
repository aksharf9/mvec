// backend/routes/test.routes.js
const express = require('express');
const router = express.Router();

// Simple ping route to test server status
router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'API is alive 🚀' });
});

module.exports = router;
