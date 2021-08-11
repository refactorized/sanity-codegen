import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {ArcLogo} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/ArcLogo',
  component: ArcLogo,
};

const Template: Story<ComponentProps<typeof ArcLogo>> = (args) => (
  <ThemeProvider theme={theme}>
    <ArcLogo {...args} />
  </ThemeProvider>
);

export const Logo = Template.bind({});
Logo.args = {};
