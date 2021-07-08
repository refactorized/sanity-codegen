/**
 * Project-wide configuration.  Manage runtime values centrally, and
 * import them from this file.
 */

const prod = process.env.NODE_ENV === 'production';
const dev = !prod;
const config = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || '97aou580',
    dataset:
      process.env.SANITY_DATASET ||
      process.env.SANITY_STUDIO_API_DATASET ||
      'production',
    token: process.env.SANITY_TOKEN || null,
  },
  flags: {
    guides: `${process.env.DEBUG_GUIDES}`.toLowerCase === 'true',
  },
  prod,
  dev,
};

module.exports = config;
