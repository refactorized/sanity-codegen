import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {Button} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  label: 'Medium',
  url: '#',
  size: 'medium',
};
