import {IoNewspaperOutline} from 'react-icons/io5';
const _required = (Rule) => Rule.required();

export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: IoNewspaperOutline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description:
        'Headline for the post, this will also appear as the page title and SEO title within search results. 100 character max recommended.',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) => Rule.required().error('Post must have a title'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Click "generate" to create based on the title of the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Post must have a slug'),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      description:
        'The short description is used in the SEO page description as well as at the top of the post.',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) =>
        Rule.required().error('Post must have a short description'),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description:
        '(optional) This appears between the resource metadata and body text',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt_text',
      type: 'string',
      title: 'Alt Text',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'e.g. treatment, personality disorders, etc.',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'postType',
      title: 'Post Type',
      type: 'reference',
      description: 'e.g. News, Announcements, Riggs Blog, etc.',
      to: {type: 'category'},
    },
    {
      name: 'credits',
      title: 'Credits',
      description: 'Displayed below title',
      type: 'prose',
    },
    {
      name: 'instructor',
      type: 'string',
      title: 'Instructor',
      description: 'Instructor for course.',
    },
    {
      name: 'body',
      title: 'Body',
      description: 'This is the main body of the post',
      type: 'prose',
      codegen: {required: true},
      validation: (Rule) => Rule.required().error('Post must have a body'),
    },
    {
      name: 'articleCarousel',
      title: 'Article Carousel',
      type: 'articleCarousel',
    },
  ],
  orderings: [
    {
      title: 'Published At, (Chronological)',
      name: 'publishedAd',
      by: [{field: 'publishedAd', direction: 'asc'}],
    },
    {
      title: 'Published At, (Reverse Chronological)',
      name: 'publishedAd',
      by: [{field: 'publishedAd', direction: 'desc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
