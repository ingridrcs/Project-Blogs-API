const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwt');

const addUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.findOne({
    where: { email },
  });
  if (newUser) {
        const error = { status: 400, message: 'User already registered' };
    throw error;
  }
  const getToken = generateJWTToken(email);
  User.create({
    displayName,
    email,
    password,
    image,
  });
  return getToken;
};

const getUser = async () => {
const allUsers = await User.findAll({
  attributes: { exclude: ['password'] },
});
return allUsers;
};
module.exports = { addUser, getUser };