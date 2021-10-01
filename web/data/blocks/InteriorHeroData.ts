import type {InteriorHero, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type InteriorHeroBlockData = SanityKeyed<
  ResolvedSanityReferences<InteriorHero>
>;

export default InteriorHeroBlockData;
