import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';
import {Dropdown} from '.';
import siteConfig from './testData';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Dropdown {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  linksList: siteConfig.links,
};
