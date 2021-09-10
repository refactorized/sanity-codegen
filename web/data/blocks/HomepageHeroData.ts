import type {HeroBlock, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type HeroBlockData = SanityKeyed<ResolvedSanityReferences<HeroBlock>>;

export default HeroBlockData;
