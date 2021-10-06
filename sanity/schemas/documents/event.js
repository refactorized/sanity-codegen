import {IoCalendarOutline} from 'react-icons/io5';

import blockContent from './blockContent';

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: IoCalendarOutline,
  fieldsets: [
    {
      name: 'eventDates',
      title: 'Start and End Date & Times',
      options: {
        columns: 2,
      },
    },
    {
      name: 'venueInfo',
      title: 'Venue Information (or URLs if online)',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'e.g. "2021 Fall Conference"',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(1).error('The event must have a name.'),
      ],
    },
    {
      name: 'ethosCourseYN',
      title: 'Is this an Ethos Course?',
      description:
        'If this is set to "true" the more detailed fields for schedule, speakers, etc, will be hidden from entry.',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'series', // e.g. Virtual Rounds
      title: 'Series',
      type: 'reference',
      description: 'e.g. Virtual Rounds, Friday Night Guest Lecture, etc.',
      to: {type: 'eventSeries'},
    },
    {
      name: 'categories', // sitewide taxonomy
      title: 'Categories',
      type: 'reference',
      description: 'e.g. treatment, personality disorders, etc.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'eventStart',
      title: 'Event Start',
      fieldset: 'eventDates',
      description: 'Start date and time',
      type: 'datetime',
      options: {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'hh:mm a',
        calendarTodayLabel: 'Today',
      },
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'eventEnd',
      title: 'Event End',
      description: 'End date and time',
      fieldset: 'eventDates',
      type: 'datetime',
      options: {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'h:mm a',
        calendarTodayLabel: 'Today',
      },
      codegen: {required: true},
      validation: (Rule) =>
        Rule.required().min(Rule.valueOfField('eventStart')),
    },
    {
      name: 'host',
      title: 'Event Host',
      type: 'string',
      fieldset: 'venueInfo',
      description:
        'e.g. "Austen Riggs Center" or another hosting organization.',
      initialValue: 'Austen Riggs Center',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'venue',
      title: 'Venue',
      description: 'e.g. "Virtual" or "Edward R. Shapiro Community Center"',
      fieldset: 'venueInfo',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'venueAddress',
      title: 'Venue Address',
      fieldset: 'venueInfo',
      description: '(optional) e.g. "25 Main St, Stockbridge, MA 01262"',
      type: 'string',
    },
    {
      name: 'registrationLink',
      title: 'URL for Registration',
      fieldset: 'venueInfo',
      description:
        'e.g. the URL for the Ethos course, or other registration URL.',
      type: 'url',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pricingDescription',
      title: 'Pricing',
      description:
        '(optional) If you have pricing, please enter it here, with the cost in bold.',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description:
        '(optional) This appears below the page metadata and above the event description.',
      options: {
        hotspot: true,
      },
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
      description: 'This appears below the event/course title.',
      type: 'blockContent',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description', //
      title: 'Description',
      description: 'This appears below the event image.',
      type: 'blockContent',
    },
    {
      name: 'speakers',
      title: 'Participating Staff',
      description:
        '(optional) Please select any participating staff members so that their information (bio, photo, etc.) shows.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'staff'}}],
      hidden: ({parent, value}) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'speakersExternal',
      title: 'External Participants',
      type: 'array',
      description:
        '(optional) Please enter any external participants so that their information (bio, photo, etc.) show.',
      of: [{type: 'reference', to: {type: 'externalContributor'}}],
      hidden: ({parent, value}) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'schedule',
      title: 'Schedule',
      description: 'If you want to display a schedule, enter it here.',
      type: 'blockContent',
      hidden: ({parent, value}) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'contact',
      title: 'Contact',
      description:
        '(optional) If you want to show contact information, enter that here.',
      type: 'blockContent',
      hidden: ({parent, value}) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'learningObjectives',
      title: 'Learning Objectives',
      description:
        '(optional) If you want to show the learning objectives for an event, enter that here.',
      type: 'blockContent',
      hidden: ({parent, value}) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'continuingEducation',
      title: 'Continuing Education',
      description:
        '(optional) If there is CE information you want to show, enter that here.',
      type: 'blockContent',
      hidden: ({parent, value}) => !value && parent?.ethosCourseYN,
    },
    {
      name: 'cancellationRefundPolicy',
      title: 'Cancellation and Refund Policy',
      description:
        '(optional) If you have a cancellation and/or refund policy, enter that here.',
      type: 'blockContent',
      hidden: ({parent, value}) => !value && parent?.ethosCourseYN,
    },
  ],
  orderings: [
    {
      title: 'Start Date, (Chronological)',
      name: 'eventStart',
      by: [{field: 'eventStart', direction: 'asc'}],
    },
    {
      title: 'Start Date, (Reverse Chronological)',
      name: 'eventStart',
      by: [{field: 'eventStart', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'series.name',
    },
  },
};
