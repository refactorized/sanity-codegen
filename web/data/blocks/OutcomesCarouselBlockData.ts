import type {OutcomesCarousel, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type OutcomesCarouselBlockData = SanityKeyed<
  ResolvedSanityReferences<OutcomesCarousel>
>;

export default OutcomesCarouselBlockData;
