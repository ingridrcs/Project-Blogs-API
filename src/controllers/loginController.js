const loginService = require('../services/loginServices');

const loginUser = async (req, res) => {
    try {
   const token = await loginService.authenticate(req.body);
   console.log('req', req.body);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
module.exports = { loginUser };
