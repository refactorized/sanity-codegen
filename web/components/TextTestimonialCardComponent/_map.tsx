import {TextTestimonialCard, TextTestimonialCardProps} from '.';
import TextTestimonialCardBlockData from '@data/blocks/TextTestimonialCardBlockData';

const _map = (block: TextTestimonialCardBlockData) => {
  const props: TextTestimonialCardProps = {
    header: block.header,
    description: block.description,
    cta: block.cta,
    ctaUrl: block.ctaUrl.slug
      ? block.ctaUrl?.slug?.current
      : block.ctaUrl?.url || '',
    testimonialText: block.testimonialText,
    patientName: block.patientName,
    patientPhotoPath: block.patientPhotoPath.asset.url,
    boxCtaLink: block.boxCtaLink.slug
      ? block.boxCtaLink?.slug?.current
      : block.boxCtaLink?.url || '',
    boxCtaText: block.boxCtaText,
  };
  return <TextTestimonialCard key={block._key} {...props} />;
};

export default _map;
