import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const textTestimonialCard = {
  name: 'textTestimonialCard',
  type: 'object',
  title: 'Text Testimonial Card Block',
  icon: RiWindowFill,
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'textTestimonialCard',
    },
    {
      name: 'header',
      type: 'string',
      title: 'Text Testimonial Card Header',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Text Testimonial Card Description',
    },
    {
      name: 'cta',
      type: 'string',
      title: 'Text Testimonial Card CTA Text',
    },
    {
      name: 'ctaUrl',
      type: 'link',
      title: 'Text Testimonial Card CTA Url',
    },
    {
      name: 'testimonialText',
      type: 'string',
      title: 'Text Testimonial Card Testimonial',
    },
    {
      name: 'patientName',
      type: 'string',
      title: 'Text Testimonial Card Patient Name',
    },
    {
      name: 'patientPhotoPath',
      type: 'image',
      title: 'Text Testimonial Card Patient Photo',
    },
    {
      name: 'boxCtaLink',
      type: 'link',
      title: 'Text Testimonial Card Box Cta Link',
    },
    {
      name: 'boxCtaText',
      type: 'string',
      title: 'Text Testimonial Card Box Cta text',
    },
  ],
};

export default textTestimonialCard;
