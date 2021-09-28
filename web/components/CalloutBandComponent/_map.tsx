import {CalloutBand, CalloutBandProps} from '.';
import CalloutBandBlockData from '@data/blocks/CalloutBandBlockData';

const _map = (block: CalloutBandBlockData) => {
  const props: CalloutBandProps = {
    header: block.header,
    description: block.description,
    btnText: block.btnText,
    btnUrl: block.btnUrl.slug
      ? block.btnUrl?.slug?.current
      : block.btnUrl?.url || '',
  };
  return <CalloutBand key={block._key} {...props} />;
};

export default _map;
