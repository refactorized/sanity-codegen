import {Prose, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type ProseBlockData = SanityKeyed<ResolvedSanityReferences<Prose>>;

export default ProseBlockData;
