const userValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long"' });
  }
  if (!dateRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  if (email) {
    return res.status(400).json({ message: 'User already registered' });
  }
  next();
};

module.exports = userValidation;