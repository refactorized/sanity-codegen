import type {LinkMenu, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type LinkMenuBlockData = SanityKeyed<ResolvedSanityReferences<LinkMenu>>;

export default LinkMenuBlockData;
