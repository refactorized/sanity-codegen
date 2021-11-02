import cfg from '../config.js';
import {createClient} from 'next-sanity';

// TODO: consolidate clients? (and seperate big fetch)

const sanityConfig = {
  dataset: cfg.sanity.dataset,
  projectId: cfg.sanity.projectId,
  apiVersion: '2021-10-10',
  useCdn: cfg.prod,
};

// Set up the client for fetching data in the getProps page functions
const publicClient = createClient(sanityConfig);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: cfg.sanity.token,
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : publicClient;

export default publicClient;
