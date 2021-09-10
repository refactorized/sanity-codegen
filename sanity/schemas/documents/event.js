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
      to: {type: 'category'},
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
      title: 'External Course?', 
      type: 'boolean', 
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
      name: 'description', //
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'moderator',
      title: 'Moderator (Staff)',
      type: 'reference',
      to: {type: 'staff'}
    },
    {
      name: 'moderatorExternal',
      title: 'Moderator (External)',
      type: 'reference',
      to: {type: 'externalContributor'}
    },
    {
      name: 'speakers',
      title: 'Speaker(s) (Staff)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'staff'}}],
    },
    {
      name: 'speakersExternal',
      title: 'Speaker(s) (External)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'externalContributor'}}],
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'blockContent',
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'blockContent',
    },
    {
      name: 'learningObjectives',
      title: 'Learning Objectives',
      type: 'blockContent',
    },
    {
      name: 'continuingEducation',
      title: 'Continuing Education',
      type: 'blockContent',
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
