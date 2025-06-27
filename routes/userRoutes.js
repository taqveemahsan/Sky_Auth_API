const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const authenticateToken = require('../middlewares/authMiddleware');

// Protected routes
router.get('/users', authenticateToken, userController.getUsers);
router.get('/users/me', authenticateToken, userController.getMyProfile);

module.exports = router;
