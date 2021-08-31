import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {HomepageHero} from './index';
import theme from '../../themes/theme';

export default {
  title: 'Components/Hero/Homepage',
  component: HomepageHero,
};

const Template: Story<ComponentProps<typeof HomepageHero>> = (args) => (
  <ThemeProvider theme={theme}>
    <HomepageHero {...args} />
  </ThemeProvider>
);

export const Homepage = Template.bind({});
Homepage.args = {
  imageUrl: '/ARC-hero-sample.png',
  title: 'One Hundred Years of Lives Reclaimed',
  eyebrow1: 'For Clinitians',
  copy1: 'Find out about reffering a patient to Riggs',
  eyebrow2: 'Patient Outcomes and Results',
  copy2: 'Learn what previous residents say about us',
  admissionsText: 'Contact Admissions',
  admissionsUrl: 'https://www.google.com',
};
