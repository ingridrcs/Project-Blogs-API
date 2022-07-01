const categoryValidation = (req, res, next) => {
  const { name } = req.body;
  console.log('middle', name);
  if (!name) {
    return res.status(400)
    .json({ message: '"name" is required' });
  }
  next();
};
module.exports = categoryValidation;