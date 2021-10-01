import type {DrawerCombo, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type DrawerComboBlockData = SanityKeyed<ResolvedSanityReferences<DrawerCombo>>;

export default DrawerComboBlockData;
