const express = require('express');
const router = express.Router();
const { weatherController } = require('../controllers');
const authenticateToken = require('../middlewares/authMiddleware');

// Public route
router.get('/weather', weatherController.getWeather);

// Protected route
router.get('/weather/summary', authenticateToken, weatherController.getWeatherSummary);

module.exports = router;
