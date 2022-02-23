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
    const preparedData = await prepareDataForCreate(data);

    // temp handling until proper MongoDB validations are set up
    if (preparedData.dataUrl) {
      const result = await collection.insertOne(preparedData);
      return result.acknowledged;
    }
  } catch (error) {
    console.error(error);
  }
};

/*
  model helpers
*/

const prepareDataForCreate = async (initialData) => {
  const data = { ...initialData };

  if (data && 'image' in data) {
    console.log('Uploading to Imgur');
    // upload to imgur for imgur link and update data
    data.image = (await imgur.upload(data.image)).link;

    // resize image using a lambda function
    const url = `${process.env.HOST_URL}${process.env.FUNCTIONS_DIR}/sharp`;
    console.log(url);
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        width: 100,
        height: 100,
        url: data.image,
      }),
    });
    const buffer = await response.buffer();
    // generate a data url from the image
    data.dataUrl = generateImageDataUrl(
      buffer,
      response.headers.get('content-type')
    );
  }
  console.log(data);
  return data;
};

// generates a minimal base64 data url from an image
const generateImageDataUrl = (buffer, mimeType) => {
  const acceptedMimeTypes = [
    'apng',
    'avif',
    'gif',
    'jpeg',
    'png',
    'svg+xml',
    'webp',
  ];
  try {
    if (mimeType && acceptedMimeTypes.includes(mimeType.split('/')[1])) {
      return `data:${mimeType};base64,${buffer.toString('base64')}`;
    } else {
      throw new Error(`Can't generate a data URL from an improper file type.`);
    }
  } catch (error) {
    console.error(`Meetup buildImageDataUrl: ${error}`);
    return false;
  }
};

export default {
  fetchOne,
  fetchAll,
  createOne,
};
