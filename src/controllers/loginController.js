const loginService = require('../services/loginServices');

const loginUser = async (req, res) => {
  const token = await loginService.authenticate(req.body);
  console.log(token);
  res.status(200).json(token);
};
module.exports = { loginUser };
