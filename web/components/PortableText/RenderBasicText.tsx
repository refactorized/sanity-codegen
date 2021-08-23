import BlockContent from '@sanity/block-content-to-react';
import {BasicText} from '@schema/types';

const RenderBasicText = (content: BasicText) => {
  return <BlockContent blocks={content} />;
};

export default RenderBasicText;
