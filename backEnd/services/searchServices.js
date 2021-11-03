const searchModel = require('../models/searchModel')

const validate = (query) => {
  if (typeof (query) === 'string') {
    return {
      err: {
        code: 'invalid_query', message: '"query" must be a string' } };
  }
};

const create = async (query, data) => {
  const result = await validate(query);
  if (result) {
    return result;
  }

  const exists = await searchModel.findByName(name);
  if (exists) {
    return {
      err: {
        code: 'invalid_query',
        message: 'Query already exists',
      }
    };
  }

  const search = await searchModel.create(query, data);
  return { search };
};

module.exports = {
  create,
};