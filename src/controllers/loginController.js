const express = require('express');
const loginService = require('../services/loginServices');

const loginRouter = express.Router();
loginRouter.post('/', async (req, res) => {
  const token = await loginService.authenticate(req.body);
  res.status(201).json(token);
});
module.exports = loginRouter;
// loginUsers
