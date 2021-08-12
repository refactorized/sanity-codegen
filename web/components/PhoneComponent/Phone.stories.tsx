import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';
import {Phone} from '.';

export default {
  title: 'Components/PhoneComponents/Phone',
  component: {Phone},
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Phone {...args} />
  </ThemeProvider>
);

export const PhoneDefault = Template.bind({});
PhoneDefault.args = {
  tel: '123.456.7890',
  fontSize: '16px',
  fontWeight: 'regular',
  fontColor: 'text',
  hoverColor: 'navy',
};
