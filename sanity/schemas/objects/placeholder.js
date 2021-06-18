import {string} from 'prop-types';

const placeholder = {
  type: 'object',
  name: 'placeholder',
  title: 'Placeholder (text)',
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'placeholder',
    },
    {
      name: 'text',
      type: 'string',
    },
  ],
};

export default placeholder;
