const postService = require('../services/postServices');

const getBlogPost = async (_req, res) => {
  try {
  const allBlogPosts = await postService.getPost();
return res.status(200).json(allBlogPosts);
  } catch (error) {
console.log(error);
return res.status(400).json({ message: 'Post does not exist' });
  }
};

const getBlogPostId = async (req, res) => {
  try {
  const { id } = req.params;
    const userId = await postService.getPostId(id);
    if (!userId) {
    return res.status(404).json({ message: 'Post does not exist' });
    }
    
    res.status(200).json(userId);
  } catch (error) {
    console.log(error);
return res.status(404).json({ message: 'Post does not exist' });
  }
};
// const addBlogPost = async (req, res) => {
//       try {
//   const addPost = await postService.addBlogPost(req.body);
//   res.status(201).json({ addPost });
//   } catch (error) {
//     console.log(error);
//     return res.status(409).json({ message: error.message });
//   }
// };
module.exports = { getBlogPost, getBlogPostId };