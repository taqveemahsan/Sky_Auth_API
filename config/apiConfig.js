require('dotenv').config();

module.exports = {
  weatherApiKey: process.env.WEATHER_API_KEY,
  weatherApiUrl: 'https://api.openweathermap.org/data/2.5/weather'
};