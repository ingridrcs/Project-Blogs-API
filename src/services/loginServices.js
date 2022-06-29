const user = require('../database/models/user');
const { generateJWTToken} = require('../utils/jwt');

const authenticate = async ({ email, password } => {
  if(!email|| !password) {
    throw{status: 401, message: 'Faltam dados'};
  }
  const token = generateJWTToken(user.dataValues);
  return { token };
});
// const { Op } = require('sequelize');
// const { User } = require('../database/models');

//  const getUser = () => {
//   return User.findAll({ includes: { model: User, as: 'user' },
//   attributes: { exclude: ['password'] },
//   where: {
//     [Op.and]: [
//       { email: 'teste1@teste.com' },
//       { name: 'Usuário' },
//     ],
//     [Op.or]: [
//       { active: true },
//     ],
//   },
//  });
//  };

 module.exports = ;