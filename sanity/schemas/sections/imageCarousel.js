const _required = (Rule) => Rule.required();

export const imageSlide = {
  name: 'imageSlide',
  type: 'object',
  title: 'Image Slide',
  fields: [
    {
      name: 'cover_image',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'cta',
      type: 'link',
      title: 'CTA',
    },
    {
      name: 'cta_text',
      type: 'string',
      title: 'CTA Text',
    },
  ],
};

export const imageCarousel = {
  name: 'imageCarousel',
  type: 'object',
  title: 'Image Carousel',
  fields: [
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      description: 'Slides to show in the carousel',
      of: [{type: 'imageSlide'}],
      validation: (Rule) => Rule.min(1),
    },
  ],
};

export default imageCarousel;
