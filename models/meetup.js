import connectToDatabase from '../lib/database/index';

/*
  TODO:
  - add try/catch
*/

const COLLECTION = 'meetups';

const fetchOne = async (query = {}, options = {}) => {
  const { db } = await connectToDatabase();
  const collection = db.collection(COLLECTION);
  const result = await collection.findOne(query, options);
  return result;
};

const fetchAll = async (query = {}, options = {}) => {
  const { db } = await connectToDatabase();
  const collection = db.collection(COLLECTION);
  const result = await collection
    .find(query, options)
    .sort({ _id: -1 })
    .toArray();
  return result;
};

const createOne = async (data) => {
  const { db } = await connectToDatabase();
  const collection = db.collection(COLLECTION);
  const result = await collection.insertOne(data);
  return result;
};

export default {
  fetchOne,
  fetchAll,
  createOne,
};
