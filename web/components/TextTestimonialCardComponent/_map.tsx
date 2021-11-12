import {TextTestimonialCard, TextTestimonialCardProps} from '.';
import TextTestimonialCardBlockData from '@data/blocks/TextTestimonialCardBlockData';
import {mapLink} from '@util/mapping/index';

const _map = (block: TextTestimonialCardBlockData) => {
  const props: TextTestimonialCardProps = {
    header: block.header,
    description: block.description,
    cta: block.cta,
    ctaUrl: mapLink(block.cta),
    testimonialText: block.testimonialText,
    patientName: block.patientName,
    patientPhotoPath: block.patientPhotoPath?.asset.url || null,
    boxCtaLink: mapLink(block.boxCtaLink),
    boxCtaText: block.boxCtaText,
    backgroundColor: block.background_color,
  };
  return <TextTestimonialCard key={block._key} {...props} />;
};

export default _map;
