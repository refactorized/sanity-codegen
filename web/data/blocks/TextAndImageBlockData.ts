import type {TextAndImageBlock, SanityKeyed} from '@schema/types';
import type {ResolvedSanityReferences} from '@data/types';

type TextAndImageBlockData = SanityKeyed<
  ResolvedSanityReferences<TextAndImageBlock>
>;

const test = (a: TextAndImageBlockData) => {
  let b = a.desktopImage.asset.assetId;
};

export default TextAndImageBlockData;
