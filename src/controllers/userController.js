const userService = require('../services/userServices');

const addUser = async (req, res) => {
      try {
  const token = await userService.addUser(req.body);
  res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};
module.exports = { addUser };