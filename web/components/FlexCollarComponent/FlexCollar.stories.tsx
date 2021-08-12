import React from 'react';
import testData from './testData';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';
import {FlexCollar} from '.';

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
  cards: testData.cards,
};
