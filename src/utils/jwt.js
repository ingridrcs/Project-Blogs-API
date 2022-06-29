const jwt = require('jsonwebtoken');

const { TOKEN_SECRET } = process.env.TOKEN_SECRET;

const jwtConfig = {
  expireIn: '48h',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => {
  jwt.sign(payload, TOKEN_SECRET, jwtConfig);
};
module.exports = { generateJWTToken };
