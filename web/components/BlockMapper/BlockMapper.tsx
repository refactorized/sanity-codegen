import config from '@cfg';
import log from '@util/logging';
import {PageBlockData} from '@data/types';
import {AnyBlockData} from '@data/blocks/AnyBlockData';

import {_map as mapProseBlock} from '@components/ProseBlock/';
import mapAdmissionsCalloutBlock from '@components/AdmissionsCalloutComponent/_map';
import mapCarouselBlock from '@components/Carousel/_map';
import mapFlexCollarBlock from '@components/FlexCollarComponent/_map';
import mapIntroBlock from '@components/IntroBlockComponent/_map';
import mapLinkMenuBlock from '@components/LinkMenuComponent/_map';
import mapPreFooterBlock from '@components/PreFooterBlock/_map';
import mapTextAndImageBlock from '@components/TextAndImageBlock/_map';

import AdmissionsCalloutBlockData from '@data/blocks/AdmissionsCalloutBlockData';
import CarouselBlockData from '@data/blocks/CarouselBlockData';
import FlexCollarBlockData from '@data/blocks/FlexCollarBlockData';
import IntroBlockData from '@data/blocks/IntroBlockData';
import LinkMenuBlockData from '@data/blocks/LinkMenuBlockData';
import PreFooterBlockData from '@data/blocks/PreFooterBlockData';
import ProseBlockData from '@data/blocks/ProseBlockData';

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
      return mapAdmissionsCalloutBlock(block as AdmissionsCalloutBlockData);
    }
    if (block.blockType === 'carousel') {
      return mapCarouselBlock(block as CarouselBlockData);
    }
    if (block.blockType === 'flexCollar') {
      return mapFlexCollarBlock(block as FlexCollarBlockData);
    }
    if (block.blockType === 'introBlock') {
      return mapIntroBlock(block as IntroBlockData);
    }
    if (block.blockType === 'linkMenu') {
      return mapLinkMenuBlock(block as LinkMenuBlockData);
    }
    if (block.blockType === 'placeholder') {
      return <div key={block._key}>{(block as {text: string}).text}</div>;
    }
    if (block.blockType === 'preFooter') {
      return mapPreFooterBlock(block as PreFooterBlockData);
    }
    if (block.blockType === 'prose') {
      return mapProseBlock(block as ProseBlockData);
    }
    if (block.blockType === 'textAndImageBlock') {
      return mapTextAndImageBlock(block); // no cast here because the types actually line up.
    }
    return (
      <div>{`unknown block type: ${(block as PageBlockData).blockType}`}</div>
    );
  });
  return <>{components}</>;
};

export default MapComponents;
