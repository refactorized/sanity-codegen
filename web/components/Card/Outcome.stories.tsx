import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {StatCard} from './index';
import theme from '../../themes/theme';

export default {
  title: 'Components/Cards',
  component: StatCard,
};

const Template: Story<ComponentProps<typeof StatCard>> = (args) => (
  <ThemeProvider theme={theme}>
    <StatCard {...args} />
  </ThemeProvider>
);

export const Stat = Template.bind({});
Stat.args = {
  backgroundColor: '#1B76B0',
  statisticText: '94%',
  baselineText:
    'Satisfaction rate with Riggs’s individual psychotherapy, as reported by discharged patients.',
};
