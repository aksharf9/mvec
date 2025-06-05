const express = require('express');
const router = express.Router();
const { registerAdmin, adminLogin, getAdminProfile } = require('../controllers/admin.controller');
const verifyToken = require('../middleware/auth.middleware');

router.post('/register', registerAdmin);
router.post('/login', adminLogin);
router.get('/profile', verifyToken, getAdminProfile);

module.exports = router;
