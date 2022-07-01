const categoriesService = require('../services/categoriesServices');

const addCategory = async (req, res) => {
  const category = await categoriesService.addCategory(req.body);
  console.log('retorno', category);
  res.status(201).json({ category });
};
module.exports = { addCategory };