const { ObjectId } = require('bson');
const getConnection = require('./connection');

const create = async ({ query, data }) => {
  const db = await getConnection();
  const result = await db.collection('lexartProducts').insertOne({ query, data });
  return { _id: result.insertedId, name, data };  
};

const findByName = async (query) => {
  const db = await getConnection();
  const product = await db.collection('lexartProducts').findOne({ query });
  return product;
};

module.exports = {
  create,
  findByName,
};