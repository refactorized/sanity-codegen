import type {TextAndImageBlock, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

export type TextAndImageBlockData = SanityKeyed<
  ResolvedSanityReferences<TextAndImageBlock>
>;

export default TextAndImageBlockData;
