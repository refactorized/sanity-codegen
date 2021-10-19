import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const textTestimonialCard = {
  name: 'textTestimonialCard',
  type: 'object',
  title: 'Text Testimonial Card Block',
  icon: RiWindowFill,
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Text Testimonial Card Header',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'description',
      type: 'string',
      title: 'Text Testimonial Card Description',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'cta',
      type: 'string',
      title: 'Text Testimonial Card CTA Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'ctaUrl',
      type: 'link',
      title: 'Text Testimonial Card CTA Url',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'testimonialText',
      type: 'string',
      title: 'Text Testimonial Card Testimonial',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'patientName',
      type: 'string',
      title: 'Text Testimonial Card Patient Name',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'patientPhotoPath',
      type: 'image',
      title: 'Text Testimonial Card Patient Photo',
      description: 'Patient Photo is Optional',
    },
    {
      name: 'boxCtaLink',
      type: 'link',
      title: 'Text Testimonial Card Box Cta Link',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'boxCtaText',
      type: 'string',
      title: 'Text Testimonial Card Box Cta text',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

export default textTestimonialCard;
