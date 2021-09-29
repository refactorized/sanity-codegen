import type {AdmissionsCallout, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type AdmissionsCalloutBlockData = SanityKeyed<
  ResolvedSanityReferences<AdmissionsCallout>
>;

export default AdmissionsCalloutBlockData;
