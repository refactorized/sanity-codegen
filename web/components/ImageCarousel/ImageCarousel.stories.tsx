import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {ImageCarousel} from './index';
import theme from '@theme';

export default {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
};

const Template: Story<ComponentProps<typeof ImageCarousel>> = (args) => (
  <ThemeProvider theme={theme}>
    <ImageCarousel {...args} />
  </ThemeProvider>
);

export const Images = Template.bind({});
Images.args = {
  slides: [
    {
      backgroundImage: '/sample-carousel-image-1.png',
      headline: 'Activities Programs',
      description:
        'Working with artisans and teachers in a variety of creative endeavors, you’ll feel like a student of living more fully.',
      cta: {text: 'What to Expect at Riggs', href: 'https://www.google.com'},
    },
    {
      backgroundImage: '/sample-carousel-image-2.png',
      headline: 'Other Programs',
      description:
        'Working with artisans and teachers in a variety of creative endeavors, you’ll feel like a student of living more fully.',
      cta: {text: 'Get to know Riggs', href: 'https://www.google.com'},
    },
  ],
};
