import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {TextAndImageBlock} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/TextAndImageBlock',
  component: TextAndImageBlock,
};

const Template: Story<ComponentProps<typeof TextAndImageBlock>> = (args) => (
  <ThemeProvider theme={theme}>
    <TextAndImageBlock {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  header: 'Fresh Insights and a Century of Expertise',
  imgUrls: {
    desktop: '/text-and-img-block.jpg',
    mobile: '/text-and-img-block.jpg',
  },
  subheader: 'Education & Research',
  caption:
    'The Erikson Institute for Education and Research of the Austen Riggs Center is about the advancement of knowledge. We host and attend conferences, workshops, lecture series, and events. The Institute also offers national and international professional education.',
  btnText: 'Learn More',
  btnUrl: '#',
};
