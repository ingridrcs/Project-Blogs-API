const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const tokenMiddle = require('../middlewares/tokenMiddleware');

const { categoryValidation } = require('../middlewares/categoryMiddleware');

router.post('/categories', tokenMiddle, categoryValidation, categoriesController.addCategory);
router.get('/categories', tokenMiddle, categoriesController.getCategories);
module.exports = router;