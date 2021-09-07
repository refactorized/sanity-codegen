import {PageSection} from '@data/types';

export default interface PlaceholderBlockData extends PageSection {
  blockType: 'placeholder';
  text: string;
}
