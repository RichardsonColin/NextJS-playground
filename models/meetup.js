import connectToDatabase from '../lib/database/index';

// libs
import imgur from '../lib/imgur/api';

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
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection(COLLECTION);
    /*const preparedData = await prepareDataForCreate(data);
    const result = await collection.insertOne(preparedData);
    return result;*/
    return '';
  } catch (error) {
    console.error(error);
  }
};

export default {
  fetchOne,
  fetchAll,
  createOne,
};
