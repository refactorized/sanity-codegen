// mapLinks
// Handles mapping of pageLink items
// to account for internal links, external links, and empty data.
export const mapLinks = (link?): string => {
  return link?.slug ? `/${link.slug.current}` : link?.url || '';
};
