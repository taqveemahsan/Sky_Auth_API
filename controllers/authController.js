const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { username, password } = req.body;

  // Static dummy user for example
  if (username === 'admin' && password === 'password') {
    const user = { id: 1, username };
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = { login };