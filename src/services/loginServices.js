const user = require('../database/models/user');
const { generateJWTToken } = require('../utils/jwt');

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    const error = { status: 400, message: 'Some required fields are missing' };
    throw error;
  }
  const userLogin = await user.findOne({
    where: { email, password },
  });

  if (!userLogin) {            
    const error = { status: 400, message: 'Invalid fields' };
    throw error;
  }
  const token = generateJWTToken(email);
  return { token };
};

module.exports = { authenticate };