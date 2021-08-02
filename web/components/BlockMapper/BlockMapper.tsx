import config from '@cfg';
import log from '@util/logging';
import {AnyBlockData} from '@data/blocks/AnyBlockData';

import {_map as mapProseBlock} from '@components/ProseBlock/';
import mapAdmissionsCalloutBlock from '@components/AdmissionsCalloutComponent/_map';
import mapCarouselBlock from '@components/Carousel/_map';
import mapFlexCollarBlock from '@components/FlexCollarComponent/_map';
import mapIntroBlock from '@components/IntroBlockComponent/_map';
import mapLinkMenuBlock from '@components/LinkMenuComponent/_map';
import mapPreFooterBlock from '@components/PreFooterBlock/_map';
import mapTextAndImageBlock from '@components/TextAndImageBlock/_map';

const MapComponents = ({blocks}: {blocks: AnyBlockData[]}) => {
  if (!blocks?.length) {
    if (config.dev) {
      log.error('invalid or empty blocks passed to <MapComponents>', {
        blocks,
      });
    }
    return null;
  }
  const components = blocks.map((block) => {
    if (block.blockType === 'admissionsCallout') {
      return mapAdmissionsCalloutBlock(block);
    }
    if (block.blockType === 'carousel') {
      return mapCarouselBlock(block);
    }
    if (block.blockType === 'flexCollar') {
      return mapFlexCollarBlock(block);
    }
    if (block.blockType === 'introBlock') {
      return mapIntroBlock(block);
    }
    if (block.blockType === 'linkMenu') {
      return mapLinkMenuBlock(block);
    }
    if (block.blockType === 'placeholder') {
      return <div key={block._key}>{block.text}</div>;
    }
    if (block.blockType === 'preFooter') {
      return mapPreFooterBlock(block);
    }
    if (block.blockType === 'prose') {
      return mapProseBlock(block);
    }
    if (block.blockType === 'textAndImageBlock') {
      return mapTextAndImageBlock(block);
    }
    return (
      <div>{`unknown block type: ${(block as PageBlockData).blockType}`}</div>
    );
  });
  return <>{components}</>;
};

export default MapComponents;
