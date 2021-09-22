import type {FlexCollar, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

export type FlexCollarBlockData = SanityKeyed<
  ResolvedSanityReferences<FlexCollar>
>;

export default FlexCollarBlockData;
