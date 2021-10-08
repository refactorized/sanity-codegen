import type {BioCallout, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type BioCalloutBlockData = SanityKeyed<ResolvedSanityReferences<BioCallout>>;

export default BioCalloutBlockData;
