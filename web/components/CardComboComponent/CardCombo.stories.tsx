import React from 'react';
import testData from './testData';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';
import {ComboCard} from '.';

export default {
  title: 'Components/ComboCard',
  component: ComboCard,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <ComboCard {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  title: testData.title,
  body: testData.body,
  cards: testData.cards,
};
