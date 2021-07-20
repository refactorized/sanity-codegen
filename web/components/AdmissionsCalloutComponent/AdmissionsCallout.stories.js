import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes/theme';
import {AdmissionsCallout} from './index.tsx';

export default {
  title: 'Components/AdmissionsCallout',
  component: AdmissionsCallout,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <AdmissionsCallout {...args} />
  </ThemeProvider>
);

export const DefaultBlock = Template.bind({});
DefaultBlock.args = {
  contactHeader: `Speak with Admissions`,
  contactDescription: `From first contact to admissions consultation, follow the steps in our admissions process.`,
  admissionHeader: `Admissions Process`,
  admissionDescription: `If other treatments haven’t worked, Riggs may be right for you. Unlike
  at other psychiatric hospitals in Massachusetts or elsewhere, our
  relational, patient-driven behavioral treatment approach addresses
  underlying issues, not just symptoms.`,
  btnText: `Contact Admissions`,
  btnUrl: `#`,
  boxlessbtnText: `Learn More About Admissions`,
  boxlessbtnUrl: `google.com`,
  phoneNumber: '866-255-1921',
};
