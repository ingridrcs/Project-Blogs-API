const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user', userController.addUser);

module.exports = router;