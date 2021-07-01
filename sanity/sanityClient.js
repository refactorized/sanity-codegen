const sanityClient = require('@sanity/client');
const config = require('../config');

const client = sanityClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  token: config.sanity.token || '', // blank = anonymous user / read only
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = client;
