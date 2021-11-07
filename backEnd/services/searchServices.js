const searchModel = require('../models/searchModel')

const create = async ({query, data}) => {
  console.log('bem vindo ao Service');
  // console.log(query);
  const search = await searchModel.create({query, data});
  return { search };
};

const getAll = async () => {
  const result = await searchModel.getAll();
  return result;
};

const getById = async (id) => {
  const recipe = await searchModel.getById(id);
  return recipe;
};

module.exports = {
  create,
  getAll,
  getById,
};