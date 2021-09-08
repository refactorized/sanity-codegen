import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';
import {CalloutBand} from '.';

export default {
  title: 'Components/CalloutBand',
  component: CalloutBand,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <CalloutBand {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  header: 'Your Treatment Experience',
  description:
    'While your treatment will reflect your own choices, all of our residential treatment programs start with intensive psychotherapy as the core, and include a range of complementary elements. ',
  btnText: 'Your Treatment Experience',
  btnUrl: '#',
};
