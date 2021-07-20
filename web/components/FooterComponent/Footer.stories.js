import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';
import siteConfig from './testData';
import {Footer} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template: Story<ComponentProps<typeof Footer>> = (args) => (
  <ThemeProvider theme={theme}>
    <Footer {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  AddressLine1: siteConfig.AddressLine1,
  AddressLine2: siteConfig.AddressLine2,
  email: siteConfig.email,
  phone: siteConfig.phone,
  fax: siteConfig.fax,
  footerConfig: siteConfig.footerConfig,
  privatePolicy: 'Privacy Policy | Terms & Conditions',
  austinRiggs: 'The Austen Riggs Center',
};
