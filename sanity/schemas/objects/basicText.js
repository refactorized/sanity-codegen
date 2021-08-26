import link from './link';
export default {
  name: 'basicText',
  title: 'Basic Text Content',
  type: 'array',
  of: [
    {
      type: 'block',
      // Only allow these block styles
      styles: [],
      lists: [],
      marks: {
        // Only allow these decorators
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        // Support annotating text with a reference to an author
        annotations: [link],
      },
    },
  ],
};
