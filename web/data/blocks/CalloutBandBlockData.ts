import type {CalloutBand, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type CalloutBandBlockData = SanityKeyed<ResolvedSanityReferences<CalloutBand>>;

export default CalloutBandBlockData;
