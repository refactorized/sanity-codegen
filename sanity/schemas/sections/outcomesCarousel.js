const _required = (Rule) => Rule.required();

export const testimonialCard = {
  name: 'testimonialCard',
  type: 'object',
  title: 'Testimonial Card',
  fields: [
    {
      name: 'testimonial_text',
      type: 'string',
      title: 'Quote',
      description: 'Thoughts and feedback from a Riggs patient.',
    },
    {
      name: 'patient_name',
      type: 'string',
      title: 'Patient Name',
    },
    {
      name: 'patient_photo_path',
      type: 'image',
      // TODO: don't know how this wires up compared to passing a static url
      title: 'Patient Photo',
    },
  ],
};

export const statCard = {
  name: 'statCard',
  type: 'object',
  title: 'Statistic Card',
  fields: [
    {
      name: 'background_color',
      // TODO: could we use a color picker
      type: 'string',
      title: 'Background Color',
      description: 'in hex (#123456) or rgba (rgba(0,0,0,0.5) format',
    },
    {
      name: 'statistic_text',
      type: 'string',
      title: 'Statistic',
      description: 'A numerical statistic, including unit of measure (eg %)',
    },
    {
      name: 'baseline_text',
      type: 'string',
      title: 'Descriptive Text',
      description: 'Thoughts and feedback from a Riggs patient.',
    },
    {
      name: 'icon',
      type: 'image',
      // TODO: is this sufficient for SVG
      title: 'Icon',
    },
  ],
};

export const outcomesCarousel = {
  name: 'outcomesCarousel',
  type: 'object',
  title: 'Outcomes Carousel',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards',
      description: 'Cards to show in the carousel',
      of: [{type: 'testimonialCard'}, {type: 'statCard'}],
      validation: (Rule) => Rule.min(1),
    },
  ],
};

export default outcomesCarousel;
