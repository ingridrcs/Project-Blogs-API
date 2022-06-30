const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwt');

const addUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.findOne({
    where: { email },
  });
  if (newUser) {
        const error = { status: 400, message: 'Some required fields are missing' };
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
module.exports = { addUser };