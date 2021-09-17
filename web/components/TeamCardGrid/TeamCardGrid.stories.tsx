import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {TeamCardGrid} from '.';
import theme from '@theme';

export default {
  title: 'Components/TeamCardGrid',
  component: TeamCardGrid,
};

const Template: Story<ComponentProps<typeof TeamCardGrid>> = (args) => (
  <ThemeProvider theme={theme}>
    <TeamCardGrid {...args} />
  </ThemeProvider>
);

export const TeamCardDefault = Template.bind({});
TeamCardDefault.args = {
  header: 'Leadership',
  category: '',
  subcategory: '',
  cards: [
    {
      image: '',
      name: 'Steven Ackerman, PhD',
      title: 'Accreditation Manager | Team Leader | Staff Psychologist',
      phone: '123.456.7890',
      email: 'sackerman@austenriggs.org',
      url: '#',
      categories: ['Administrative'],
      subcategories: ['Dietary'],
    },
    {
      image: '/test-team.png',
      name: 'Steven Ackerman, PhD',
      title: 'Accreditation Manager | Team Leader | Staff Psychologist',
      phone: '123.456.7890',
      email: 'sackerman@austenriggs.org',
      url: '#',
      categories: ['Administrative'],
      subcategories: ['Dietary'],
    },
    {
      image: '/test-team.png',
      name: 'Steven Ackerman, PhD',
      title: 'Accreditation Manager | Team Leader | Staff Psychologist',
      phone: '123.456.7890',
      email: 'sackerman@austenriggs.org',
      url: '#',
      categories: ['Administrative'],
      subcategories: ['Dietary', 'IT'],
    },
    {
      image: '/test-team.png',
      name: 'Steven Ackerman, PhD',
      title: 'Accreditation Manager | Team Leader | Staff Psychologist',
      phone: '123.456.7890',
      email: 'sackerman@austenriggs.org',
      url: '#',
      categories: ['Test'],
      subcategories: ['Dietary', 'IT'],
    },
    {
      image: '/test-team.png',
      name: 'Steven Ackerman, PhD',
      title: 'Accreditation Manager | Team Leader | Staff Psychologist',
      phone: '123.456.7890',
      email: 'sackerman@austenriggs.org',
      url: '#',
      categories: ['Test'],
      subcategories: ['Dietary', 'IT'],
    },
    {
      image: '/test-team.png',
      name: 'Steven Ackerman, PhD',
      title: 'Accreditation Manager | Team Leader | Staff Psychologist',
      phone: '123.456.7890',
      email: 'sackerman@austenriggs.org',
      url: '#',
      categories: ['Test'],
      subcategories: ['Dietary', 'IT'],
    },
    {
      image: '/test-team.png',
      name: 'Steven Ackerman, PhD',
      title: 'Accreditation Manager | Team Leader | Staff Psychologist',
      phone: '123.456.7890',
      email: 'sackerman@austenriggs.org',
      url: '#',
      categories: ['Test'],
      subcategories: ['Dietary', 'IT'],
    },
  ],
};
