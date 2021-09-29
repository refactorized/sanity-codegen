import {IoNewspaperOutline} from 'react-icons/io5'

export default {
  name: 'news',
  title: 'News',
  type: 'document',
  icon: IoNewspaperOutline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Headline for the post, this will also appear as the page title and SEO title within search results.',
      type: 'string',
      validation: Rule => Rule.required().error('Post must have a title')
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
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      description: 'Please add an author to the post',
      to: {type: 'staff'},
      validation: Rule => Rule.required().error('Post must have an author')
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      description: 'The short description is used in the SEO page description as well as at the top of the post.',
      type: 'blockContent',
      validation: Rule => Rule.required().error('Post must have a short description')
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: '(optional) This appears between the resource metadata and body text',
      options: {
        hotspot: true,
      },
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
      name: 'publishedAt',
      title: 'Published at',
      description: 'This date is used in sorting, and should reflect the date the post was originally published',
      type: 'datetime',
      options: {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'hh:mm a',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.required().error('Post must have a publication date')
    },
    {
      name: 'body',
      title: 'Body',
      description: 'This is the main body of the post',
      type: 'blockContent',
      validation: Rule => Rule.required().error('Post must have a body')
    },
  ],
  orderings: [
    {
      title: 'Published At, (Chronological)',
      name: 'publishedAd',
      by: [
        {field: 'publishedAd', direction: 'asc'}
      ]
    },
    {
      title: 'Published At, (Reverse Chronological)',
      name: 'publishedAd',
      by: [
        {field: 'publishedAd', direction: 'desc'}
      ]
    },
  ],
  
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
