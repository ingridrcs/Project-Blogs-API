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

const getUserId = async (req, res) => {
  const { id } = req.params;
    const userId = await userService.getUserId(id);
    if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
    }
    
    res.status(200).json(userId);
};
module.exports = { addUser, getUser, getUserId };