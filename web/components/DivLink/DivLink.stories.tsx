import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import DivLink, {propsDivLink} from './';
import theme from '@theme';

export default {
  title: 'Components/DivLink',
  component: DivLink,
};

const Template: Story<propsDivLink> = (args) => (
  <ThemeProvider theme={theme}>
    <DivLink {...args} />
  </ThemeProvider>
);

export const Download = Template.bind({});
Download.args = {
  icon: 'Download',
  text: 'Download',
  href: 'https://gist.githubusercontent.com/ElliotGluck/64b0b814293c09999f765e265aaa2ba1/raw/79f24f9f87654d7ec7c2f6ba83e927852cdbf9a5/gistfile1.txt',
} as propsDivLink;

export const External = Template.bind({});
External.args = {
  icon: 'ExternalLink',
  text: `Space Jam '96`,
  href: 'https://www.spacejam.com/1996/',
} as propsDivLink;

export const Centered = Template.bind({});
Centered.args = {
  icon: 'ExternalLink',
  text: `Space Jam '96`,
  href: 'https://www.spacejam.com/1996/',
  center: true,
} as propsDivLink;
