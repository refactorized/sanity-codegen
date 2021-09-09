import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {InteriorHero} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/InteriorHero',
  component: InteriorHero,
};

const Template: Story<ComponentProps<typeof InteriorHero>> = (args) => (
  <ThemeProvider theme={theme}>
    <InteriorHero {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  header: 'The Riggs Difference',
  caption:
    'Our open setting embodies what makes our treatment approach different: You are empowered to engage with other patients and staff in a therapeutic community to find meaning in your lived experience.',
  imgUrls: {
    desktop: '/test-hero.png',
    mobile: '',
  },
  videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
  headerPadding: false,
};
