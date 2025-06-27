const express = require('express');
const router = express.Router();
const { weatherController } = require('../controllers');

router.get('/weather', weatherController.getWeather);

module.exports = router;