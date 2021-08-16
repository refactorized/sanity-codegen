import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {TextAndImageBlock, TextAndImageBlockNoTopHeader} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/TextAndImageBlockNoTopHeader',
  component: TextAndImageBlockNoTopHeader,
};

const Template: Story<ComponentProps<typeof TextAndImageBlockNoTopHeader>> = (
  args,
) => (
  <ThemeProvider theme={theme}>
    <TextAndImageBlockNoTopHeader {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  header: 'Financing Your Stay',
  imgUrls: {
    desktop: '/text-and-img-block.jpg',
    mobile: '/text-and-img-block.jpg',
  },
  caption:
    'How much does therapy cost at Riggs? There is no single answer. Our all-inclusive fees vary according to the program, length of stay, and intensiveness of services provided. We always try to communicate with you honestly, openly, and clearly about financing your stay at Riggs.',
  btnText: 'Treatment Cost',
  btnUrl: '#',
  reverse: false,
};
