import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {NewsDetailHero} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/NewsDetailHero',
  component: NewsDetailHero,
};

const Template: Story<ComponentProps<typeof NewsDetailHero>> = (args) => (
  <ThemeProvider theme={theme}>
    <NewsDetailHero {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  category: 'News',
  header:
    'Riggs Trustee and Founder of Psych-Appeal, Dr. Meiram Bendat, Testifies Before Congress',
  date: 'April 16, 2021',
  urlFacebook: 'https://facebook.com',
  urlTwitter: 'https://twitter.com',
  urlLinkedin: 'https://linkedin.com',
};
