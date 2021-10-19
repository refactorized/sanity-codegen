import {RiLayoutColumnLine} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

export const bioCalloutCards = {
  title: 'Bio Card',
  type: 'object',
  name: 'bioCalloutCards',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Image is Optional',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'credential',
      type: 'string',
      title: 'Credential',
      description: 'Credential is Optional',
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Bio',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

const bioCallout = {
  name: 'bioCallout',
  type: 'object',
  title: 'Bio Callout Block',
  icon: RiLayoutColumnLine,
  fields: [
    {
      name: 'headline',
      type: 'string',
      title: 'Bio Callout Headline',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Bio Callout Cards',
      of: [{type: 'bioCalloutCards'}],
      codegen: {required: true},
      validation: _required,
    },
  ],
};

export default bioCallout;
