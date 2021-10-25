import type {TeamPage, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

export type TeamPageBlockData = SanityKeyed<ResolvedSanityReferences<TeamPage>>;

export default TeamPageBlockData;
