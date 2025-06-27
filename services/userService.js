const db = require('../models/db');

const getUsers = async () => {
  if (!db) {
    return [{ id: 1, name: "DB not connected, fallback user" }];
  }
  const result = await db.query('SELECT * FROM users');
  return result.rows;
};

module.exports = { getUsers };