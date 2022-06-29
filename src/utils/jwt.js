const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expireIn: '48h',
  algorithm: 'HS256',
};

const generateJWTToken = (email) => {
  const token = jwt.sign({ email }, TOKEN_SECRET, jwtConfig);
  return token;
};

module.exports = generateJWTToken;
