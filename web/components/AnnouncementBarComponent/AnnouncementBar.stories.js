import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';
import {AnnouncementBar} from './index.tsx';

export default {
  title: 'Components/AnnouncementBar',
  component: AnnouncementBar,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <AnnouncementBar {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  header: `Announcement goes here tortor neque dictum tortor nec odio massa eget at amet phasellus.`,
  cta: `Read More`,
  url: `#`,
};
