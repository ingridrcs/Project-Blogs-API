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

const getUser = async (req, res) => {
const allUsers = await userService.getUser();
res.status(200).json(allUsers);
};
module.exports = { addUser, getUser };