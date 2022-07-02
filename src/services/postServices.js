const { BlogPost, Category, User } = require('../database/models');

const getPost = async () => {
const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] },
      }],
});
return allPosts;
};

const getPostId = async (id) => {
  const userId = await BlogPost.findOne({ 
    where: { id },
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ], 
  });
  return userId;
};
module.exports = { getPost, getPostId };