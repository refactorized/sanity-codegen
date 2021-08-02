import {FlexCollar, FlexCollarProps} from '.';
import FlexCollarBlockData from '@data/blocks/FlexCollarBlockData';
import testData from './testData';

const props: FlexCollarProps = {cards: testData.cards};

const _map = (block: FlexCollarBlockData) => (
  <FlexCollar key={block._key} {...props} />
);

export default _map;
