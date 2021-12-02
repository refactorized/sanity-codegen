// mapLink
// Handles mapping of pageLink items
// to account for internal links, external links, and empty data.
export const mapLink = (link?: {
  slug?: {current: string};
  url?: string;
}): string => {
  return link?.slug
    ? `/${link.slug.current}`
    : `${link?.url || ''}`.replace(
        'https://austen-riggs-center.netlify.app',
        '/',
      );
};
// TODO: HACK: Fix above, at least don't hard-code
