const { weatherService } = require('../services');

const getWeather = async (req, res) => {
  const city = req.query.city || 'Karachi';
  const data = await weatherService.getWeatherByCity(city);

  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
};

module.exports = { getWeather };