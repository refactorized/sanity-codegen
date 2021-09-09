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
      name: 'eventCategory', // e.g. Conference, Ongoing Educational Events
      title: 'Event Category',
      type: 'reference',
      to: {type: 'eventCategory'},
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
      name: 'host', // e.g. Austen Riggs Center
      title: 'Host',
      type: 'string',
      initialValue: 'Austen Riggs Center',
    },
    {
      name: 'description', //
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'location', // Webinar -or- Physical Google-maps-able location
      title: 'Location',
      type: 'string',
    },
    {
      name: 'lmsHosted', // Do we need this -- some sort of "is this in an external system"
      title: 'External Course', // Needs some sort of host
      type: 'boolean', // And we'd add in
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
