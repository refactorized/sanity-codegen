import type {TextTestimonialCard, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type TextTestimonialCardBlockData = SanityKeyed<
  ResolvedSanityReferences<TextTestimonialCard>
>;

export default TextTestimonialCardBlockData;
