import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {RightArrowNoLine} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

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
  width: 8,
  height: 14,
};
