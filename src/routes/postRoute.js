const express = require('express');

const router = express.Router();
const postController = require('../controllers/postController');
const tokenMiddle = require('../middlewares/tokenMiddleware');

router.get('/post', tokenMiddle, postController.getBlogPost);
router.get('/post/:id', tokenMiddle, postController.getBlogPostId);
module.exports = router;