const userService = require('../services/userServices');

const addUser = async (req, res) => {
  const token = await userService.addUser(req.body);
  res.status(200).json(token);
};
module.exports = { addUser };