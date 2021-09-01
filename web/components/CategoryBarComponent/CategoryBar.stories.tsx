import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';
import {CategoryBar} from '.';
import siteConfig from './testData';

export default {
  title: 'Components/CategoryBar',
  component: CategoryBar,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <CategoryBar {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  links: siteConfig.links,
  setCategory: null,
};
