import type {PreFooter, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type PreFooterBlockData = SanityKeyed<ResolvedSanityReferences<PreFooter>>;

export default PreFooterBlockData;
