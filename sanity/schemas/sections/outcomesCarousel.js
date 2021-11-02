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
      codegen: {required: true},
      validation: _required,
      description: 'Thoughts and feedback from a Riggs patient.',
    },
    {
      name: 'patient_name',
      type: 'string',
      title: 'Patient Name',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'patient_photo_path',
      type: 'image',
      // TODO: don't know how this wires up compared to passing a static url
      title: 'Patient Photo',
      codegen: {required: true},
      validation: _required,
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
      codegen: {required: true},
      validation: _required,
      description: 'in hex (#123456) or rgba (rgba(0,0,0,0.5) format',
    },
    {
      name: 'statistic_text',
      type: 'string',
      title: 'Statistic',
      codegen: {required: true},
      validation: _required,
      description: 'A numerical statistic, including unit of measure (eg %)',
    },
    {
      name: 'baseline_text',
      type: 'string',
      title: 'Descriptive Text',
      codegen: {required: true},
      validation: _required,
      description: 'Thoughts and feedback from a Riggs patient.',
    },
    {
      name: 'icon',
      type: 'image',
      codegen: {required: true},
      validation: _required,
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
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards',
      description: 'Cards to show in the carousel',
      of: [{type: 'testimonialCard'}, {type: 'statCard'}],
      codegen: {required: true},
      validation: (Rule) => Rule.min(1).required(),
    },
  ],
};

export default outcomesCarousel;
