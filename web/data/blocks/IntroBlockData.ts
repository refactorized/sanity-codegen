export default interface IntroBlockData extends PageBlockData {
  blockType: 'introBlock';
  body: string;
  buttonText: string;
  // FIXME: this will become our more robust link type
  buttonLink: {current: string};
}
