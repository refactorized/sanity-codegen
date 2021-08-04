import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {IntroBlock} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';

export default {
  title: 'Components/IntroBlock',
  component: IntroBlock,
};

const Template: Story<ComponentProps<typeof IntroBlock>> = (args) => (
  <ThemeProvider theme={theme}>
    <IntroBlock {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  description: `Nestled in the Berkshires, the Austen Riggs Center is unlike most mental health treatment centers. Here in our open setting in western Massachusetts, you’ll find the space and support you need to understand your problems, find your voice, and make your way forward.
  `,
  btnText: 'Learn About Us',
  btnUrl: '#',
};
