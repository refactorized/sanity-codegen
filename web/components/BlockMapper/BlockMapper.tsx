import config from '@cfg';
import log from '@util/logging';
import {PageSection} from '@data/types';

// mapping functions
import {_map as mapProseBlock} from '@components/ProseBlock/';
import mapAdmissionsCalloutBlock from '@components/AdmissionsCalloutComponent/_map';
import mapCarouselBlock from '@components/OutcomesCarousel/_map';
import mapFlexCollarBlock from '@components/FlexCollarComponent/_map';
import mapHeroBlock from '@components/Hero/_map';
import mapIntroBlock from '@components/IntroBlockComponent/_map';
import mapLinkMenuBlock from '@components/LinkMenuComponent/_map';
import mapPreFooterBlock from '@components/PreFooterBlock/_map';
import mapTextAndImageBlock from '@components/TextAndImageBlock/_map';

// section types
import AdmissionsCalloutBlockData from '@data/blocks/AdmissionsCalloutBlockData';
import CarouselBlockData from '@data/blocks/CarouselBlockData';
import FlexCollarBlockData from '@data/blocks/FlexCollarBlockData';
import IntroBlockData from '@data/blocks/IntroBlockData';
import HeroBlockData from '@data/blocks/HomepageHeroData';
import LinkMenuBlockData from '@data/blocks/LinkMenuBlockData';
import PreFooterBlockData from '@data/blocks/PreFooterBlockData';
import ProseBlockData from '@data/blocks/ProseBlockData';
import TextAndImageBlockData from '@data/blocks/TextAndImageBlockData';

const MapComponents = ({blocks}: {blocks: any[]}) => {
  if (!blocks?.length) {
    if (config.dev) {
      log.error('invalid or empty blocks passed to <MapComponents>', {
        blocks,
      });
    }
    return null;
  }
  const components = blocks.map((block) => {
    if (block._type === 'admissionsCallout') {
      return mapAdmissionsCalloutBlock(block as AdmissionsCalloutBlockData);
    }
    if (block._type === 'carousel') {
      return mapCarouselBlock(block as CarouselBlockData);
    }
    if (block._type === 'flexCollar') {
      return mapFlexCollarBlock(block as FlexCollarBlockData);
    }
    if (block._type === 'introBlock') {
      return mapIntroBlock(block as IntroBlockData);
    }
    if (block._type === 'linkMenu') {
      let b = block;
      return mapLinkMenuBlock(block as LinkMenuBlockData);
    }
    if (block._type === 'placeholder') {
      return <div key={block._key}>{(block as {text: string}).text}</div>;
    }
    if (block._type === 'preFooter') {
      return mapPreFooterBlock(block as PreFooterBlockData);
    }
    if (block._type === 'prose') {
      return mapProseBlock(block as ProseBlockData);
    }
    if (block._type === 'heroBlock') {
      return mapHeroBlock(block as HeroBlockData);
    }
    if (block._type === 'textAndImageBlock') {
      return mapTextAndImageBlock(block as TextAndImageBlockData);
    }
    return <div>{`unknown block type: ${(block as PageSection)._type}`}</div>;
  });
  return <>{components}</>;
};

export default MapComponents;
