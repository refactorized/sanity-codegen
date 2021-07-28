import React from 'react';
import siteConfig from './testData';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';
import {FlexCollar} from './index.tsx';

export default {
  title: 'Components/FlexCollar',
  component: FlexCollar,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <FlexCollar {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  flexAsset: siteConfig.flexCollarConfig.links,
};
