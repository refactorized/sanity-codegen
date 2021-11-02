import type {ArticleCarousel, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type ArticleCarouselBlockData = SanityKeyed<
  ResolvedSanityReferences<ArticleCarousel>
>;

export default ArticleCarouselBlockData;
