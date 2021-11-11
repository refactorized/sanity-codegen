import imageUrlBuilder from '@sanity/image-url';
import client from '@data/sanityClient';

const getImageUrl = (image, fit, width = null, height = null): string => {
  if (image) {
    const urlBuilder = imageUrlBuilder(client);
    const url = urlBuilder.image(image).fit(fit);
    if (fit == 'crop') return url.width(width).height(height).url();
    return url.url();
  }
  return '';
};

export default getImageUrl;
