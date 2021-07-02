import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {LeftArrow} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/Arrow',
  component: LeftArrow,
};

const Template: Story<ComponentProps<typeof LeftArrow>> = (args) => (
  <ThemeProvider theme={theme}>
    <LeftArrow {...args} />
  </ThemeProvider>
);

export const LeftArr = Template.bind({});
LeftArr.args = {
  stroke: '#111',
  size: 24,
  hoverColor: '#71976B',
};
