const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const { userRoutes, weatherRoutes, authRoutes } = require('./routes');
const authenticateToken = require('./middlewares/authMiddleware');

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', weatherRoutes);

//If want to authenticate complete routes
// app.use('/api', authenticateToken, userRoutes);
// app.use('/api', authenticateToken, weatherRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});