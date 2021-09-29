import {AdmissionsCallout, AdmissionsCalloutProps} from '.';
import AdmissionsCalloutBlockData from '@data/blocks/AdmissionsCalloutBlockData';

const _map = (block: AdmissionsCalloutBlockData) => {
  const props: AdmissionsCalloutProps = {
    contactHeader: block.contactHeader,
    contactDescription: block.contactDescription,
    admissionHeader: block.admissionHeader,
    admissionDescription: block.admissionDescription,
    btnText: block.btnText,
    btnUrl: block.btnUrl.slug ? block.btnUrl.slug.current : block.btnUrl.url,
    boxlessbtnText: block.boxlessbtnText,
    boxlessbtnUrl: block.boxlessbtnUrl.slug
      ? block.boxlessbtnUrl.slug.current
      : block.boxlessbtnUrl.url,
    phoneNumber: block.phoneNumber,
  };

  return <AdmissionsCallout key={block._key} {...props} />;
};

export default _map;
