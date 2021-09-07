import {PageSection} from '@data/types';

export default interface ProseBlockData extends PageSection {
  blockType: 'prose';
  content: any[];
}
