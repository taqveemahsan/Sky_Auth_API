const { userService } = require('../services');

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { getUsers };