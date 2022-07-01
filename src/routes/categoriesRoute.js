const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const tokenMiddle = require('../middlewares/tokenMiddleware');

const categoryMiddle = require('../middlewares/categoryMiddleware');

router.post('/categories', categoryMiddle, tokenMiddle, categoriesController.addCategory);

module.exports = router;