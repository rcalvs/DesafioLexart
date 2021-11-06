const searchService = require('../services/searchServices')

const create = async (req, res) => {
  const {query, data} = req.body.query
  console.log('bem vindo ao Controller');
  const { err, response } = await searchService.create({query, data});
  if (err) return res.status(422).json({ err });
  return res.status(200).json(response);
};

const getAll = async (_req, res) => {
  const result = await searchService.getAll();
  return res.status(200).json(result);
};

module.exports = {
  create,
  getAll,
};