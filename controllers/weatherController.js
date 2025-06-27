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

const getWeatherSummary = async (req, res) => {
  const city = req.query.city || 'Karachi';
  const data = await weatherService.getWeatherByCity(city);

  if (data && data.weather && data.weather[0]) {
    const main = data.weather[0].main.toLowerCase();
    let message = "Weather info not available";

    if (main.includes("clear")) message = "Sunny day 🌞";
    else if (main.includes("cloud")) message = "Cloudy skies ☁️";
    else if (main.includes("rain")) message = "It's raining ☔";
    else message = `Current weather: ${main}`;

    res.json({ city, summary: message });
  } else {
    res.status(500).json({ error: "No summary data available" });
  }
};

module.exports = { getWeather, getWeatherSummary };
