const axios = require('axios');
const { weatherApiKey, weatherApiUrl } = require('../config');

const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(weatherApiUrl, {
      params: { q: city, appid: weatherApiKey, units: 'metric' }
    });
    return response.data;
  } catch (error) {
    console.error("❌ Weather API Error:", error.message);
    return null;
  }
};

module.exports = { getWeatherByCity };