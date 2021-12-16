import connectToImgur from './index';

const upload = async (url) => {
  try {
    const { client } = connectToImgur();
    let result = await client.uploadUrl(url);
    return result;
  } catch (error) {
    console.error(`Imgur upload: ${error}`);
    return false;
  }
};

export default {
  upload,
};
