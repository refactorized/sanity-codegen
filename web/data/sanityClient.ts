import sanityClient from '@sanity/client';
import config from '../../config';

const client = sanityClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  token: '', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
