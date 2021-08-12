import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {RightArrowNoLine} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';

export default {
  title: 'Components/Arrow',
  component: RightArrowNoLine,
};

const Template: Story<ComponentProps<typeof RightArrowNoLine>> = (args) => (
  <ThemeProvider theme={theme}>
    <RightArrowNoLine {...args} />
  </ThemeProvider>
);

export const RightNoLine = Template.bind({});
RightNoLine.args = {
  stroke: '#111',
  size: 14,
};
