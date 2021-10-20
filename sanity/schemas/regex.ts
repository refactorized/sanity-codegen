// https://regexr.com/67re3
const validSlugRegex = /^[^\/](?:[0-9a-z]|-(?!\/)|\/(?![-\/]))*[^\/]$/;

export const isValidSlug = (str: any) => {
  return validSlugRegex.test(`${str}`);
};
