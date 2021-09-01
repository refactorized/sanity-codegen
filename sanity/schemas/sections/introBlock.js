import {string} from 'prop-types';

const introBlock = {
  name: 'introBlock',
  type: 'object',
  title: 'Intro Block',
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'introBlock',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body Text',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'buttonLink',
      // FIXME: this should be a more fleshed out link type including slug refs
      type: 'slug',
      title: 'Button Link',
    },
  ],
};

export default introBlock;
