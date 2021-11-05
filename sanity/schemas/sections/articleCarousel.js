const _required = (Rule) => Rule.required();

export const articleCarousel = {
  name: 'articleCarousel',
  type: 'object',
  title: 'Article Carousel',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'selected_articles',
      type: 'array',
      title: 'Selected Articles',
      description:
        'selected articles will load every time a the begining of the carousel',
      of: [
        {
          type: 'articleInfo',
          to: [{type: 'event'}, {type: 'resource'}, {type: 'news'}],
        },
      ],
    },
    {
      name: 'categories', // sitewide taxonomy
      title: 'Categories',
      type: 'reference',
      type: 'array',
      description: 'e.g. treatment, personality disorders, etc.',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
};

export default articleCarousel;
