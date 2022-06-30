const { User } = require('../database/models'); 
const { generateJWTToken } = require('../utils/jwt');

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    const error = { status: 400, message: 'Some required fields are missing' };
    throw error;
  }

  const userLogin = await User.findOne({
    where: { email },
  });

  if (!userLogin) {            
    const error = { status: 400, message: 'Invalid fields' };
    throw error;
  }
  const tokenUser = generateJWTToken(email);
  // console.log('oi', token);
  return tokenUser;
};

module.exports = { authenticate };