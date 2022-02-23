import sharp from 'sharp';
import fetch from 'node-fetch';
import { URL } from 'url';

// const sharp = require('sharp');
// const fetch = require('node-fetch');
// const { URL } = require('url');

const streamToBuffer = (stream) => {
  return new Promise((resolve, reject) => {
    const bufferArray = [];

    stream.on('data', (chunk) => bufferArray.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(bufferArray)));
    stream.on('error', (err) => reject(err));
  });
};

exports.handler = async (event) => {
  try {
    const { url, width, height } = JSON.parse(event.body);
    // parse URL
    new URL(url);
    console.log(
      `\n${'*** *** '.repeat(20)}\nRequest: ${JSON.stringify(event)}`
    );

    // handle image request
    const response = await fetch(url);
    const stream = response.body;
    const inputBuffer = await streamToBuffer(stream);
    const outputBuffer = await sharp(inputBuffer)
      .resize(width, height)
      .toBuffer();

    // convert to base64
    const body = outputBuffer.toString('base64');
    const headers = {
      'content-type': response.headers.get('content-type'),
    };
    console.log(
      `\nSuccessfully converted: '${url}' into ${
        outputBuffer.byteLength
      }B Buffer.\n${'*** *** '.repeat(20)}\n`
    );
    return {
      statusCode: 200,
      body,
      headers,
      isBase64Encoded: true,
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: 'Invalid request',
    };
  }
};
