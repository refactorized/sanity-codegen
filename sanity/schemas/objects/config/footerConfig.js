// find a better type
export const footerLink = {
  title: 'Footer Link',
  type: 'object',
  name: 'footerLink',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
  ],
};

const footerConfig = {
  type: 'object',
  name: 'footerConfig',
  title: 'Footer Configuration',
  fields: [
    {
      name: 'col1',
      title: 'First Column',
      description: 'The first entry appears as a heading',
      type: 'array',
      of: [{type: 'footerLink'}],
    },
    {
      name: 'col2',
      title: 'Second Column',
      description: 'The first entry appears as a heading',
      type: 'array',
      of: [{type: 'footerLink'}],
    },
    {
      name: 'col3',
      title: 'Third Column',
      description: 'The first entry appears as a heading',
      type: 'array',
      of: [{type: 'footerLink'}],
    },
    {
      name: 'col4',
      title: 'Fourth Column',
      description: 'The first entry appears as a heading',
      type: 'array',
      of: [{type: 'footerLink'}],
    },
    {
      name: 'col5',
      title: 'Extra Headings (Fifth) Column',
      description: 'All entries appear as headings',
      type: 'array',
      of: [{type: 'footerLink'}],
    },
  ],
};

export default footerConfig;
