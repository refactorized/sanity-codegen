import {PtEmbed as PtEmbedData} from '@data/types';
import {UnwrappedGenericEmbed} from '@components/GenericEmbed';

const PtEmbed = (props: {node: PtEmbedData}) => (
  <UnwrappedGenericEmbed markup={props.node.markup || ''} />
);

export default PtEmbed;
