import connectToImgur from './index';

const upload = async (url) => {
  try {
    const { client } = connectToImgur();
    let result = await client.uploadUrl(url);
    return result;
  } catch (error) {
    console.log('Imgur upload: ', error);
  }
};

export default {
  upload,
};
