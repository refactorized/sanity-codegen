import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';
import {PreFooterBlock} from './index.tsx';

export default {
  title: 'Example/PreFooterBlock',
  component: PreFooterBlock,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <PreFooterBlock {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  header: 'Start the Admissions Process',
  description:
    'From first contact to admissions consultation, let’s find out if we’re a good fit. ',
  btnText: 'Contact Us',
  btnUrl: '#',
  phoneNumber: '866-255-1921',
};
