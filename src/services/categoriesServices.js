const { Category } = require('../database/models');

const addCategory = async (name) => {
  console.log('name', name);
  const category = await Category.create({
    name,
  });
  // console.log('category', category);
return category;
};

const getAllCategories = async () => {
const allUsers = await Category.findAll();
return allUsers;
};
module.exports = { addCategory, getAllCategories };