const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const { userRoutes, weatherRoutes } = require('./routes');

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', weatherRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});