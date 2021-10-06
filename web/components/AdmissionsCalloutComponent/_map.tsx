import {AdmissionsCallout, AdmissionsCalloutProps} from '.';
import AdmissionsCalloutBlockData from '@data/blocks/AdmissionsCalloutBlockData';
import {mapLinks} from '@util/mapping/index';

const _map = (block: AdmissionsCalloutBlockData) => {
  const props: AdmissionsCalloutProps = {
    contactHeader: block.contactHeader,
    contactDescription: block.contactDescription,
    admissionHeader: block.admissionHeader,
    admissionDescription: block.admissionDescription,
    btnText: block.btnText,
    btnUrl: mapLinks(block.btnUrl),
    boxlessbtnText: block.boxlessbtnText,
    boxlessbtnUrl: mapLinks(block.boxlessbtnUrl),
    phoneNumber: block.phoneNumber,
  };

  return <AdmissionsCallout key={block._key} {...props} />;
};

export default _map;
