import type {ImageCarousel, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type ImageCarouselBlockData = SanityKeyed<
  ResolvedSanityReferences<ImageCarousel>
>;

export default ImageCarouselBlockData;
