import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {StatCard} from './index';
import theme from '../../themes/theme';

const Template: Story<ComponentProps<typeof StatCard>> = (args) => (
    <ThemeProvider theme={theme}>
      <StatCard {...args} />
    </ThemeProvider>
  );
  
  export const Outcome = Template.bind({});
  Outcome.args = {
    // stuff for the card
  };