/*
  - Official Imgur API docs: https://apidocs.imgur.com
  - Open source client library: https://github.com/kaimallea/node-imgur

  TODO:
  - Update client lib version at a later date (still under development)
*/
// import { ImgurClient } from 'imgur';
// temporary use of older client
const client = require('imgur');

let cachedClient = null;

export default () => {
  // check the cache
  if (cachedClient) {
    return {
      client: cachedClient,
    };
  }

  // connect to client
  // let client = new ImgurClient({ clientId: process.env.IMGUR_CLIENT_ID });

  // temporary utilization of older lib
  client.setClientId(process.env.IMGUR_CLIENT_ID);
  client.setAPIUrl('https://api.imgur.com/3/');

  // set cache
  cachedClient = client;

  return {
    client: cachedClient,
  };
};
