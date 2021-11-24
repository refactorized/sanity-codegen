import type {StickyCta, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type StickyCtaBlockData = SanityKeyed<ResolvedSanityReferences<StickyCta>>;

export default StickyCtaBlockData;
