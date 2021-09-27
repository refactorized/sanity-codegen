import sanityClient from '@sanity/client';
import config from '../config';

const client = sanityClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  token: config.sanity.token || '', // blank = anonymous user / read only
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = client;
