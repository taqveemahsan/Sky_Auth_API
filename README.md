# 🌐 Sky Auth API

A professional RESTful API built with Node.js, Express, PostgreSQL, and JWT authentication.  
Includes modules for user management and weather data using OpenWeatherMap API.

---

## 🚀 Features

- Modular folder structure
- JWT-based authentication
- Protected + public API routes
- PostgreSQL DB integration with fallback
- Weather API via OpenWeatherMap
- Clean `index.js` exports in all folders

---

## 📁 Project Structure

```
my-node-api/
├── controllers/
├── services/
├── routes/
├── models/
├── config/
├── middlewares/
├── .env
├── app.js
└── package.json
```

---

## ⚙️ Environment Variables (`.env`)

```env
PORT=3000

# PostgreSQL
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=mydb
DB_PORT=5432

# Weather API
WEATHER_API_KEY=your_openweathermap_api_key_here

# JWT
JWT_SECRET=your_jwt_secret_here
```

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/my-node-api.git
cd my-node-api
npm install
```

---

## ▶️ Run the Project

```bash
npm start
```

---

## 🔐 Authentication

### ➤ Login

```
POST /api/login
```

```json
{
  "username": "admin",
  "password": "password"
}
```

**Returns:**

```json
{
  "token": "<jwt_token>"
}
```

---

## 🧑‍💻 User Routes

| Endpoint         | Method | Auth | Description             |
|------------------|--------|------|-------------------------|
| `/api/users`     | GET    | ✅   | Get all users           |
| `/api/users/me`  | GET    | ✅   | Get current user info   |

---

## 🌤️ Weather Routes

| Endpoint                  | Method | Auth | Description                         |
|---------------------------|--------|------|-------------------------------------|
| `/api/weather`            | GET    | ❌   | Get weather by city (default: Karachi) |
| `/api/weather/summary`    | GET    | ✅   | Get weather description summary     |

---

## 🔑 Using Protected Routes

All secured routes require the following header:

```
Authorization: Bearer <your_jwt_token>
```

---

## 💡 Notes

- DB connection is optional; fallback mock data used if not connected.
- `.env` must be configured before running the app.
- Modular services and controllers are loaded via `index.js` in each folder.

---

## 📜 License

MIT – feel free to use, modify, and build on top of this boilerplate!
