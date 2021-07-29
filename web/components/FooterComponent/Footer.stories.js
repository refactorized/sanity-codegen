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

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Footer {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {siteConfig};
