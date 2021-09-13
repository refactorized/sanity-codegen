import type {HeroBlock, HeroCard, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type HeroBlockData = SanityKeyed<ResolvedSanityReferences<HeroBlock>>;

export type HeroCardData = SanityKeyed<HeroCard>;

export default HeroBlockData;
