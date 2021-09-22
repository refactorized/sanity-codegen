import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';
import siteConfig from './testData';

import {TeamDetailPage} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/TeamDetailPage',
  component: TeamDetailPage,
};

const Template: Story<ComponentProps<typeof TeamDetailPage>> = (args) => (
  <ThemeProvider theme={theme}>
    <TeamDetailPage {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  links: siteConfig.links,
  image: siteConfig.image,
  phone: siteConfig.phone,
  email: siteConfig.email,
  firstName: siteConfig.firstName,
  lastName: siteConfig.lastName,
  credentials: siteConfig.credentials,
  title: siteConfig.title,
  title2: siteConfig.title2,
  department: siteConfig.department,
  bio: siteConfig.bio,
};
