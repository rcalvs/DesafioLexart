const searchService = require('../services/searchServices')

const create = async (req, res) => {
  const {query, data} = req.body;
  const { err, return } = await searchService.create(query, data);
  if (err) return res.status(422).json({ err });
  return res.status(200).json(return);
};

module.exports = {
  create,
};