import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';
import {TextTestimonialCard} from '.';

export default {
  title: 'Components/TextTestimonialCard',
  component: TextTestimonialCard,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <TextTestimonialCard {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  header: `People We Treat`,
  description: `At Riggs, we welcome adults (aged 18 and up) from across the country and around the world. People from all walks of life who have stumbled on their walk, and seek a self-directed, behavioral treatment approach to help them return to a more productive, more satisfying life.`,
  cta: `Learn More`,
  ctaUrl: `google.com`,
  testimonialText: `I look at Riggs as the place that broke my fall. In giving me the space to discover my competency, I found my voice. I started by expressing my anger about almost everything. But this expression opened many doors for me. From there, I broke the downward spiral.`,
  patientName: `CJ, former patient`,
  patientPhotoPath: `../`,
  boxCtaLink: `https://google.com`,
  boxCtaText: `More Patient Outcomes`,
};
