import type {ComboCard, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type ComboCardBlockData = SanityKeyed<ResolvedSanityReferences<ComboCard>>;

export default ComboCardBlockData;
