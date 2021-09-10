import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {EventDetailHero} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/EventDetailHero',
  component: EventDetailHero,
};

const Template: Story<ComponentProps<typeof EventDetailHero>> = (args) => (
  <ThemeProvider theme={theme}>
    <EventDetailHero {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  category: 'Conferences',
  header:
    'Austen Riggs Center 2021 Fall Conference - Psychotherapy for Psychosis: Expert Clinicians Describe Their Approach',
  startDate: '',
  endDate: '',
  price: 35,
  caption:
    'The Erikson Institute for Education and Research of the Austen Riggs Center presents its 2021 annual fall conference for clinicians, scholars, and mental health advocates, which will be virtual this year.',
  urlFacebook: 'https://facebook.com',
  urlTwitter: 'https://twitter.com',
  urlLinkedin: 'https://linkedin.com',
  btnText: 'Register Now',
  btnUrl: '#',
};
