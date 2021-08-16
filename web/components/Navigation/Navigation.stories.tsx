import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {Navigation} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const Template: Story<ComponentProps<typeof Navigation>> = (args) => (
  <ThemeProvider theme={theme}>
    <Navigation {...args} />
  </ThemeProvider>
);

const sampleLinks = [
  {
    label: 'Our Treatment',
    url: '#',
    links: [
      {
        label: 'The Riggs Difference',
        url: '#',
      },
      {
        label: 'What We Treat',
        url: '#',
        links: [
          {
            label: 'Depression & Depressive Disorders',
            url: '#',
          },
          {
            label: 'Psychotic Disorders Including Schizophrenia',
            url: '#',
          },
          {
            label: 'Other Personality Disorders',
            url: '#',
          },
        ],
      },
      {
        label: 'Who We Treat',
        url: '#',
      },
      {
        label: 'Your Treatment Experience',
        url: '#',
      },
      {
        label: 'Patient Outcomes & Results',
        url: '#',
      },
      {
        label: 'Intensive Outpatient Program',
        url: '#',
      },
    ],
  },
  {
    label: 'Admissions',
    url: '#',
  },
  {
    label: 'About',
    url: '#',
  },
  {
    label: 'Education & Research',
    url: '#',
  },
  {
    label: 'Events',
    url: '#',
  },
  {
    label: 'News & Blog',
    url: '#',
  },
  {
    label: 'Contact Us',
    url: '#',
  },
];

export const SiteNavigation = Template.bind({});
SiteNavigation.args = {
  links: sampleLinks,
  featuredLink: {
    label: 'Give to Riggs',
    url: '#',
  },
  logInLink: {
    label: 'Log in',
    url: '#',
  },
  registerLink: {
    label: 'Register',
    url: '#',
  },
  phone: '866.255.1921',
};
