const express = require('express');

const router = express.Router();
const loginController = require('../controllers/usersControllers');

router.post('/login', loginController.loginUsers);

module.exports = router;