const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`;
const DB_NAME = process.env.DB_NAME;
const HOST_URL =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.SITE_NAME}.netlify.app`
    : process.env.NETLIFY_DEV
    ? `${process.env.DEV_URL}:8888`
    : `${process.env.DEV_URL}:3000`;
const FUNCTIONS_DIR = process.env.SITE_NAME
  ? '/.netlify/functions'
  : '/functions';
const fallback = process.env.NODE_ENV === 'development' ? false : 'blocking';
const imgDomains = ['i.imgur.com'];
const imgFormats = ['image/avif', 'image/webp'];

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    DB_URI,
    DB_NAME,
    fallback,
    HOST_URL,
    FUNCTIONS_DIR,
  },
  images: {
    domains: imgDomains,
    formats: imgFormats,
  },
};
