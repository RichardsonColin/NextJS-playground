import connectToDatabase from '../lib/database/index';

// libs
import imgur from '../lib/imgur/api';
// import sharp from '../lib/sharp/api';

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
    // const preparedData = await prepareDataForCreate(data);
    // const result = await collection.insertOne(preparedData);
    return result;
  } catch (error) {
    console.error(error);
  }
};

// model helpers

// const prepareDataForCreate = async (initialData) => {
//   const data = { ...initialData };

//   if (data && 'image' in data) {
//     // upload to imgur for imgur link and update data
//     data.image = (await imgur.upload(data.image)).link;
//     // generate a data url from the image
//     data.dataUrl = await generateImageDataUrl(data.image, (buffer) =>
//       sharp.resizeImage(buffer, 100, 100)
//     );
//   }

//   return data;
// };

// const fetchImage = async (imageUrl) => {
//   try {
//     const response = await fetch(imageUrl);

//     if (!response.ok) {
//       throw new Error(response);
//     }

//     return response;
//   } catch (error) {
//     console.error(`Meetup fetchImage: ${error}`);
//     return false;
//   }
// };

// // generates a minimal base64 data url from an image
// const generateImageDataUrl = async (imageUrl, resize) => {
//   const acceptedMIMETypes = [
//     'apng',
//     'avif',
//     'gif',
//     'jpeg',
//     'png',
//     'svg+xml',
//     'webp',
//   ];
//   try {
//     const response = await fetchImage(imageUrl);
//     const contentType = response.headers.get('content-type');

//     if (contentType && acceptedMIMETypes.includes(contentType.split('/')[1])) {
//       let buffer = await response.buffer();

//       if (resize && typeof resize === 'function') {
//         buffer = await resize(buffer);
//       }

//       return `data:${contentType};base64,${buffer.toString('base64')}`;
//     } else {
//       throw new Error(`Can't generate a data URL from an improper file type.`);
//     }
//   } catch (error) {
//     console.error(`Meetup buildImageDataUrl: ${error}`);
//     return false;
//   }
// };

export default {
  fetchOne,
  fetchAll,
  createOne,
};
