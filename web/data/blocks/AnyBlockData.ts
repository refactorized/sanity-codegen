import type AdmissionsCalloutBlockData from './AdmissionsCalloutBlockData';
import type IntroBlockData from './IntroBlockData';
import type LinkMenuBlockData from './LinkMenuBlockData';
import type PlaceholderBlockData from './PlaceholderBlockData';
import type ProseBlockData from './ProseBlockData';

export type AnyBlockData =
  | AdmissionsCalloutBlockData
  | IntroBlockData
  | LinkMenuBlockData
  | PlaceholderBlockData
  | ProseBlockData;
