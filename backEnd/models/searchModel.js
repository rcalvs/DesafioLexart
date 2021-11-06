const getConnection = require('./connection');

const create = async ({ query, data }) => {
  const db = await getConnection();
  console.log('bem vindo ao Model');
  const result = await db.collection('lexartProducts').insertOne({ query, data });
  return { _id: result.insertedId, query, data };  
};

const findByName = async (query) => {
  const db = await getConnection();
  const result = await db.collection('lexartProducts').findOne({ query });
  return result;
};

const getAll = async () => {
  const db = await getConnection();
  const result = await db.collection('lexartProducts').find({}).toArray();
  return result;
};

module.exports = {
  create,
  findByName,
  getAll,
};