import {PageSection} from '@data/types';

export default interface IntroBlockData extends PageSection {
  blockType: 'introBlock';
  body: string;
  buttonText: string;
  // FIXME: this will become our more robust link type
  buttonLink: {current: string};
}
