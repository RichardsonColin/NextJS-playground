const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const DB_URI = `mongodb+srv://${process.env['DB_USER']}:${process.env['DB_PASSWORD']}${process.env['DB_HOST']}/${process.env['DB_NAME']}?${process.env['DB_OPTIONS']}`;
const DB_NAME = process.env['DB_NAME'];
const fallback = process.env.NODE_ENV === 'development' ? false : 'blocking';

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        DB_URI,
        DB_NAME,
        fallback,
      },
    };
  }

  return {
    env: {
      DB_URI,
      DB_NAME,
      fallback,
    },
  };
};
