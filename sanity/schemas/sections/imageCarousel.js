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
      codegen: {required: true},
      validation: _required,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt_text',
      type: 'string',
      title: 'Alt Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'cta',
      type: 'link',
      title: 'CTA',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'cta_text',
      type: 'string',
      title: 'CTA Text',
      codegen: {required: true},
      validation: _required,
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
      validation: (Rule) => Rule.min(1).required(),
    },
  ],
};

export default imageCarousel;
