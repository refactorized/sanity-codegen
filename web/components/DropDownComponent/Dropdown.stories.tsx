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
  setCategory: function (selected) {
    // Here in the demo, we are logging the selected value to the console.
    // In practice, you would attach this callback to page state or another component to process.
    console.log(selected);
  },
};
