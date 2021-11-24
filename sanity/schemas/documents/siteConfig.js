import {IoSettingsOutline} from 'react-icons/io5';
const _required = (Rule) => Rule.required();

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
    {
      name: 'navigation',
      title: 'Navigation',
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
        codegen: {required: true},
        validation: _required,
      },
      {
        name: 'AddressLine2',
        type: 'string',
        title: 'Address Line 1',
        codegen: {required: true},
        validation: _required,
      },
      {
        name: 'phoneLabel1',
        type: 'string',
        title: 'First Line Phone Number Label',
        codegen: {required: true},
        validation: _required,
      },
      {
        name: 'phone1',
        type: 'string',
        title: 'First Line Phone Number',
        description: 'this number may be altered by a service at runtime',
        codegen: {required: true},
        validation: _required,
      },
      {
        name: 'phoneLabel2',
        type: 'string',
        title: 'Second Link Phone Number Label',
        codegen: {required: true},
        validation: _required,
      },
      {
        name: 'phone2',
        type: 'string',
        title: 'Second Link Phone Number',
        description: 'this number may be altered by a service at runtime',
        codegen: {required: true},
        validation: _required,
      },
      {
        name: 'email',
        type: 'string',
        title: 'General Information Email Address',
        codegen: {required: true},
        validation: _required,
      },
    ]),
    ...inFieldset('navigation', [
      {
        name: 'logInLinkLabel',
        type: 'string',
        title: 'Log in Label',
      },
      {
        name: 'logInLinkUrl',
        type: 'link',
        title: 'Log in Url',
      },
      {
        name: 'registerLink',
        type: 'string',
        title: 'Register Link',
      },
      {
        name: 'registerUrl',
        type: 'link',
        title: 'Register Url',
      },
      {
        name: 'phoneNumber',
        type: 'string',
        title: 'Phone Number',
      },
      {
        name: 'featuredLinkLabel',
        type: 'string',
        title: 'Give to Riggs Label',
      },
      {
        name: 'featuredLinkUrl',
        type: 'link',
        title: 'Give to Riggs Url',
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
  ],
};
