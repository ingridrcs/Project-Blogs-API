const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
// const tokenMiddle = require('../middlewares/tokenMiddleware');
const userMiddle = require('../middlewares/userMiddleware');

router
.post('/user', userMiddle.emailValidation, userMiddle.passwordValidation, userController.addUser);

module.exports = router;