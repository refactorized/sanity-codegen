import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {TestimonialCard} from './index';
import theme from '../../themes/theme';

export default {
    title: 'Components/Cards',
    component: TestimonialCard,
};

const Template: Story<ComponentProps<typeof TestimonialCard>> = (args) => (
    <ThemeProvider theme={theme}>
      <TestimonialCard {...args} />
    </ThemeProvider>
  );
  
  export const Testimonial = Template.bind({});
  Testimonial.args = {
      testimonialText: '<b>I look at Riggs as the place that broke my fall.</b> In giving me the space to discover my competency, I found my voice. I started by expressing my anger about almost everything. But this expression opened many doors for me. From there, I broke the downward spiral.'
  };