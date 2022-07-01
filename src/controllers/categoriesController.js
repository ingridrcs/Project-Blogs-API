const categoriesService = require('../services/categoriesServices');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.addCategory(name);
  // console.log('retorno', category);
  res.status(201).json({ category });
};

const getCategories = async (req, res) => {
  const allCategories = await categoriesService.getAllCategories();
  res.status(200).json(allCategories);
};
module.exports = { addCategory, getCategories };