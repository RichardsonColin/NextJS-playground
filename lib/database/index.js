import { MongoClient } from 'mongodb';

const DB_URI = process.env['DB_URI'];
const DB_NAME = process.env['DB_NAME'];

export default async () => {
  let cachedClient = null;
  let cachedDb = null;

  // check the cache
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  const opts = {
    maxIdleTimeMS: 60000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // connect to cluster
  let client = new MongoClient(DB_URI, opts);
  await client.connect();
  let db = client.db(DB_NAME);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
};
