export default {
  name: 'event',
  title: 'Event',
  type: 'document',

  // Start Date,
  // End Date
  // Start Time
  // End Time
  // Registration Status (open/waitlist/full)
  // Duration (e.g. 1 hour)
  // something about "moderated by, presneted by, discussion"
  // Presenters (array)
  // Presenter Bios (???)
  // Registration Link
  // Event Materials (downloads)
  // Description (needs WYSIWYG)
  // Type of Event (e.g. Event, CE Course, )
  // Cost (e.g. Free, $1,234, etc)
  // CE Metadata ()

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().min(1).error('Error Message')],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'series', // e.g. Virtual Rounds
      title: 'Series',
      type: 'reference',
      to: {type: 'eventSeries'},
    },
    {
      name: 'category', // sitewide taxonomy
      title: 'Category',
      type: 'reference',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'eventStart',
      title: 'Event Start',
      type: 'datetime',
    },
    {
      name: 'eventEnd',
      title: 'Event End',
      type: 'datetime',
    },
    {
      name: 'host', 
      title: 'Event Host',
      type: 'string',
      initialValue: 'Austen Riggs Center',
    },
    {
      name: 'venue', 
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'venueAddress',
      title: 'Venue Address',
      type: 'string',
    },
    {
      name: 'registrationLink',
      title: 'URL for Registration',
      type: 'string',
    },
    {
      name: 'lmsHosted', 
      title: 'External Event?', 
      type: 'boolean', 
      initialValue: false,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'shortDescription', //
      title: 'Short Description',
      type: 'blockContent',
    },
    {
      name: 'ethosCourseYN',
      title: 'Is this an Ethos Course?',
      type: 'boolean',
      initialValue: true,
    }
    {
      name: 'description', //
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'speakers',
      title: 'Participating Staff',
      type: 'array',
      of: [{type: 'reference', to: {type: 'staff'}}],
      hidden: ({ parent, value }) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'speakersExternal',
      title: 'External Participants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'externalContributor'}}],
      hidden: ({ parent, value }) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'blockContent',
      hidden: ({ parent, value }) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'blockContent',
      hidden: ({ parent, value }) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'learningObjectives',
      title: 'Learning Objectives',
      type: 'blockContent',
      hidden: ({ parent, value }) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'continuingEducation',
      title: 'Continuing Education',
      type: 'blockContent',
      hidden: ({ parent, value }) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'cancellationRefundPolicy',
      title: 'Cancellation and Refund Policy',
      type: 'blockContent',
      hidden: ({ parent, value }) => !value && parent?.ethosCourseYN,
    },
],
orderings: [
  {
    title: 'Start Date, (Chronological)',
    name: 'eventStart',
    by: [
      {field: 'eventStart', direction: 'asc'}
    ]
  },
  {
    title: 'Start Date, (Reverse Chronological)',
    name: 'eventStart',
    by: [
      {field: 'eventStart', direction: 'desc'}
    ]
  },
],
preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'series.name'
    },
  },
};
