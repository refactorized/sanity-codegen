import {IoSettingsOutline} from 'react-icons/io5';

const inFieldset = (name, fields) => {
  return fields.map((field) => ({...field, fieldset: name}));
};

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Config',
  preview: {select: {}, prepare: () => ({title: 'Site-wide Configuration'})},
  icon: IoSettingsOutline,
  fieldsets: [
    {
      name: 'announcementBar',
      title: 'Announcement Bar',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'general',
      title: 'General Sitewide Information',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
  ],
  fields: [
    ...inFieldset('announcementBar', [
      {
        name: 'announcementBarShow',
        type: 'boolean',
        title: 'Show Announcement Bar',
        description: 'Displays announcement bar site-wide.',
      },
      {
        name: 'announcementBarMessage',
        type: 'string',
        title: 'Announcement Bar Message',
        description: 'Text to display on announcement bar.',
      },
      {
        name: 'announcementBarCtaText',
        type: 'string',
        title: 'CTA Text',
        description: 'Text for announcement bar CTA',
      },
      {
        name: 'announcementBarCtaLink',
        type: 'link',
        title: 'CTA Link',
        description: 'Destination link for announcement bar CTA message.',
      },
    ]),
    ...inFieldset('general', [
      {
        name: 'AddressLine1',
        type: 'string',
        title: 'Address Line 1',
      },
      {
        name: 'AddressLine2',
        type: 'string',
        title: 'Address Line 1',
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Default Phone Number',
        description: 'this number may be altered by a service at runtime',
      },
      {
        name: 'fax',
        type: 'string',
        title: 'Fax Number',
      },
      {
        name: 'email',
        type: 'string',
        title: 'General Information Email Address',
      },
    ]),
    {
      name: 'footerConfig',
      type: 'footerConfig',
      title: 'Footer Configuration',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'navConfig',
      type: 'navConfig',
      title: 'Nav Configuration',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
  ],
};
