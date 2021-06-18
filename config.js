/**
 * Project-wide configuration.  Manage runtime values centrally, and
 * import them from this file.
 */
const config = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || '97aou580',
    dataset:
      process.env.SANITY_DATASET ||
      process.env.SANITY_STUDIO_API_DATASET ||
      'production',
  },
};

export default config;
