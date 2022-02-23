import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

export default async () => {
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
  let client = new MongoClient(process.env['DB_URI'], opts);
  await client.connect();
  let db = client.db(process.env['DB_NAME']);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
};
