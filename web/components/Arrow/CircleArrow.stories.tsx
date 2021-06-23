import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {CircleArrow} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/Arrow',
  component: CircleArrow,
};

const Template: Story<ComponentProps<typeof CircleArrow>> = (args) => (
  <ThemeProvider theme={theme}>
    <CircleArrow {...args} />
  </ThemeProvider>
);

export const CircleArr = Template.bind({});
CircleArr.args = {
  arrowColor: 'white',
  circleColor: '#1B76B0',
  width: 58,
  height: 58,
};
