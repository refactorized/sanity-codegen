import React, {ComponentProps} from 'react';
import siteConfig from './testData';
import {Story} from '@storybook/react';

import {Navigation} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const Template: Story<ComponentProps<typeof Navigation>> = (args) => (
  <ThemeProvider theme={theme}>
    <Navigation {...args} />
  </ThemeProvider>
);

export const SiteNavigation = Template.bind({});
SiteNavigation.args = {
  links: siteConfig.links.navConfig,
  featuredLink: siteConfig.featuredLink,
  phone: siteConfig.phone,
  logInLink: siteConfig.logInLink,
  registerLink: siteConfig.registerLink,
};
