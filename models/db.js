const { Pool } = require('pg');
const { dbConfig } = require('../config');

let pool;

try {
  pool = new Pool(dbConfig);
  pool.connect()
    .then(() => console.log("✅ DB connected"))
    .catch(err => {
      console.error("❌ DB connection failed:", err.message);
      pool = null;
    });
} catch (err) {
  console.error("❌ DB init error:", err.message);
  pool = null;
}

module.exports = pool;