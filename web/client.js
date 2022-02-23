import sanityClient from '@sanity/client';

// configs
const apiVersion = '2021-10-21';
const projectId = process.env['SANITY_PROJECT_ID'];

export default sanityClient({
  apiVersion,
  projectId,
  dataset: 'production',
  useCdn: true,
});
