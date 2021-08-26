import {PageBlockData} from '@data/types';

export default interface PlaceholderBlockData extends PageBlockData {
  blockType: 'placeholder';
  text: string;
}
