import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {UpArrow} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';

export default {
  title: 'Components/Arrow',
  component: UpArrow,
};

const Template: Story<ComponentProps<typeof UpArrow>> = (args) => (
  <ThemeProvider theme={theme}>
    <UpArrow {...args} />
  </ThemeProvider>
);

export const UpArr = Template.bind({});
UpArr.args = {
  size: 12,
};
