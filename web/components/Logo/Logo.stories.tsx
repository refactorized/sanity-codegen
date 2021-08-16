import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {Logo} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template: Story<ComponentProps<typeof Logo>> = (args) => (
  <ThemeProvider theme={theme}>
    <Logo {...args} />
  </ThemeProvider>
);

export const CircleArr = Template.bind({});
CircleArr.args = {
  color: 'black',
  hoverColor: 'black',
  size: 287,
};
