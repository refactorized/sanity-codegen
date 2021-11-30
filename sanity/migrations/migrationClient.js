const cfg = require('../../config.js');
const createClient = require('next-sanity').createClient;

const sanityConfig = {
  dataset: cfg.sanity.dataset,
  projectId: cfg.sanity.projectId,
  apiVersion: '2021-10-10',
  useCdn: cfg.prod,
};

// client for migrations needs to be logged in, this means we need to deal
// with drafts in all of our migrations too - which is dumb.
const client = createClient({
  ...sanityConfig,
  useCdn: false,
  token: cfg.sanity.token,
});

module.exports = client;
