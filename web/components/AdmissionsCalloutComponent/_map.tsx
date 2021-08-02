import {AdmissionsCallout} from '.';
import AdmissionsCalloutBlockData from '@data/blocks/AdmissionsCalloutBlockData';

// TODO: rearrange data into single var
const props = {
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

const _map = (block: AdmissionsCalloutBlockData) => (
  <AdmissionsCallout key={block._key} {...props} />
);

export default _map;
