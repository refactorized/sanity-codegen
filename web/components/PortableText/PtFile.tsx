import {PtFile as PtFileData} from '@data/types';
import DivLink from '@components/DivLink';

const PtFile = (props: {node: PtFileData}) => {
  const url = `${props.node.file.asset.url}?dl=`;
  const fileName = props.node.title || props.node.file.asset.originalFilename;
  return <DivLink icon="Download" href={url} text={fileName} />;
};

export default PtFile;
