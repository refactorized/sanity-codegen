export const navItem = {
  title: 'Nav item',
  type: 'object',
  name: 'navItem',
  fields: [
    {title: 'Title', type: 'string', name: 'title'},
    {title: 'Link', type: 'link', name: 'link'},
    {
      title: 'Sub-nav items',
      name: 'subnav',
      type: 'array',
      of: [{type: 'navItem'}],
    },
  ],
};

export const navList = {
  name: 'navList',
  title: 'Top level nav list and summary',
  type: 'object',
  fields: [
    ...navItem.fields,
    // use these for phase 2 layout
    // {
    //   name: 'Details',
    //   type: 'object',
    //   fields: [
    //     {title: 'Heading', type: 'string', name: 'heading'},
    //     {title: 'Body', type: 'basicText', name: 'body'},
    //     {title: 'Image', type: 'image', name: 'image'},
    //   ],
    // },
  ],
};

export default {
  name: 'navConfig',
  type: 'object',
  title: 'Nav Config',
  fields: [
    {
      name: 'navLists',
      type: 'array',
      of: [{type: 'navList'}],
    },
  ],
};
