import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {RightArrow} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';

export default {
  title: 'Components/Arrow',
  component: RightArrow,
};

const Template: Story<ComponentProps<typeof RightArrow>> = (args) => (
  <ThemeProvider theme={theme}>
    <RightArrow {...args} />
  </ThemeProvider>
);

export const RightArr = Template.bind({});
RightArr.args = {
  stroke: '#111',
  size: 24,
  hoverColor: '#71976B',
};
