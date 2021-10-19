import {CalloutBand, CalloutBandProps} from '.';
import CalloutBandBlockData from '@data/blocks/CalloutBandBlockData';
import {mapLink} from '@util/mapping/index';

const _map = (block: CalloutBandBlockData) => {
  const props: CalloutBandProps = {
    header: block.header,
    description: block.description,
    btnText: block.btnText,
    btnUrl: mapLink(block.btnUrl),
  };
  return <CalloutBand key={block._key} {...props} />;
};

export default _map;
