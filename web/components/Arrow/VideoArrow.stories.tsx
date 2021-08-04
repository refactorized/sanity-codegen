import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {VideoArrow} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';

export default {
  title: 'Components/Arrow',
  component: VideoArrow,
};

const Template: Story<ComponentProps<typeof VideoArrow>> = (args) => (
  <ThemeProvider theme={theme}>
    <VideoArrow {...args} />
  </ThemeProvider>
);

export const VideoArr = Template.bind({});
VideoArr.args = {
  arrowColor: 'white',
  circleColor: '#1B76B0',
  size: 58,
};
