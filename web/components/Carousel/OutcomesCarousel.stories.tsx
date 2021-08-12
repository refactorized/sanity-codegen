import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {OutcomesCarousel} from '../Carousel/index';
import theme from '@theme';

export default {
  title: 'Components/Carousel',
  component: OutcomesCarousel,
};

const Template: Story<ComponentProps<typeof OutcomesCarousel>> = (args) => (
  <ThemeProvider theme={theme}>
    <OutcomesCarousel {...args} />
  </ThemeProvider>
);

export const Outcomes = Template.bind({});
Outcomes.args = {
  title: 'Patient Outcomes & Results',
  cards: [
    {
      backgroundColor: '#1B76B0',
      statisticText: '94%',
      baselineText:
        'Satisfaction rate with Riggs’s individual psychotherapy, as reported by discharged patients.',
    },
    {
      testimonialText:
        'I look at Riggs as the place that broke my fall. In giving me the space to discover my competency, I found my voice. I started by expressing my anger about almost everything. But this expression opened many doors for me. From there, I broke the downward spiral.',
      patientName: 'CJ, Former Patient',
    },
    {
      backgroundColor: 'rgba(32, 69, 104, 1)',
      statisticText: '70,000+',
      baselineText:
        'Lorem ispum dolor set met ipsum solor set met ipsum. LoremLorem ispum dolor set met ipsum.',
    },
    {
      backgroundColor: 'rgba(113, 151, 107, 1)',
      statisticText: '90%',
      baselineText:
        'Lorem ispum dolor set met ipsum solor set met ipsum. LoremLorem ispum dolor set met ipsum.',
    },
  ],
};
