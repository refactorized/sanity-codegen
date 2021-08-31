import {PageBlockData} from '@data/types';

export default interface ProseBlockData extends PageBlockData {
  blockType: 'prose';
  content: any[];
}
