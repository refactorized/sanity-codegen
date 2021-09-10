import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {Dates} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/Dates',
  component: Dates,
};

const Template: Story<ComponentProps<typeof Dates>> = (args) => (
  <ThemeProvider theme={theme}>
    <Dates {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  startDate: '',
  endDate: '',
  showTime: true,
  showTimeZone: true,
};
