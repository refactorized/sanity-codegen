import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {StickyCta, StoryContainer} from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';

export default {
  title: 'Components/StickyCTA',
  component: StickyCta,
};

const Template: Story<ComponentProps<typeof StickyCta>> = (args) => (
  <ThemeProvider theme={theme}>
    <StoryContainer>
      <div>
        Sticky CTA will position itself to the center/right of the desktop
        viewport. And to the bottom of the mobile viewport.
      </div>
      <StickyCta {...args} />
    </StoryContainer>
  </ThemeProvider>
);

export const StickyCtaDefault = Template.bind({});
StickyCtaDefault.args = {
  visible: true,
  label: 'Contact Admissions',
  url: '#',
};
