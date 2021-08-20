import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {DownArrow} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';

export default {
  title: 'Components/Arrow',
  component: DownArrow,
};

const Template: Story<ComponentProps<typeof DownArrow>> = (args) => (
  <ThemeProvider theme={theme}>
    <DownArrow {...args} />
  </ThemeProvider>
);

export const DownArr = Template.bind({});
DownArr.args = {
  size: 14,
};
