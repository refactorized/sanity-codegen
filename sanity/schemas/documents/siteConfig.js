import {IoSettingsOutline} from 'react-icons/io5'


const inFieldset = (name, fields) => {
  return fields.map((field) => ({...field, fieldset: name}));
};

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Config',
  icon: IoSettingsOutline,
  fieldsets: [{name: 'general', title: 'General Sitewide Information'}],
  fields: [
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
    },
  ],
};
