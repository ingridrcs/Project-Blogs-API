const { BlogPost, User, Category } = require('../database/models');

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
// const addBlogPost = async ({ title, content, published, updated }, userId) => {
//   const newPost = await User.findOne({
//     where: { email },
//   });
//   if (newPost) {
//         const error = { status: 400, message: 'User already registered' };
//     throw error;
//   }
//   const newBlogPost = BlogPost.create({
//     title,
//     content,
//     userId,
//   });
//   return newBlogPost;
// };
module.exports = { getPost, getPostId };