import {ThemeFonts, ThemeFontWeights} from './theme';

export type FontDef = {
  themeFontFamily: ThemeFonts;
  themeFontWeight: ThemeFontWeights;
  fontSize: string;
  letterSpacing: String;
  lineHeight: string;
};

const defs = {
  'xxl-headline-regular': <FontDef>{
    themeFontFamily: 'headline',
    themeFontWeight: 'regular',
    fontSize: '72px',
    letterSpacing: '-0.01em',
    lineHeight: '104%',
  },
  'xl-headline-regular': <FontDef>{
    themeFontFamily: 'headline',
    themeFontWeight: 'regular',
    fontSize: '44px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
  'lrg-headline-regular': <FontDef>{
    themeFontFamily: 'headline',
    themeFontWeight: 'regular',
    fontSize: '35px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
  'med-headline-regular': <FontDef>{
    themeFontFamily: 'headline',
    themeFontWeight: 'regular',
    fontSize: '30px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
  'sm-headline-regular': <FontDef>{
    themeFontFamily: 'headline',
    themeFontWeight: 'regular',
    fontSize: '26px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
  'xs-headline-regular': <FontDef>{
    themeFontFamily: 'headline',
    themeFontWeight: 'regular',
    fontSize: '20px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
  'xxs-headline-regular': <FontDef>{
    themeFontFamily: 'headline',
    themeFontWeight: 'regular',
    fontSize: '18px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
  'lrg-body-regular': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'regular',
    fontSize: '22px',
    letterSpacing: '0.015em',
    lineHeight: '134%',
  },
  'med-body-regular': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'regular',
    fontSize: '18px',
    letterSpacing: '0.015em',
    lineHeight: '134%',
  },
  'sm-body-regular': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'regular',
    fontSize: '16px',
    letterSpacing: '0.015em',
    lineHeight: '134%',
  },
  'xs-body-regular': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'regular',
    fontSize: '14px',
    letterSpacing: '0.015em',
    lineHeight: '134%',
  },
  'xxs-body-regular': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'regular',
    fontSize: '12px',
    letterSpacing: '0.015em',
    lineHeight: '134%',
  },
  'lrg-eyebrow-bold': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '0.04em',
    lineHeight: '130%',
  },
  'med-eyebrow-bold': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'bold',
    fontSize: '12px',
    letterSpacing: '0.12em',
    lineHeight: '130%',
  },
  'sm-eyebrow-bold': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'bold',
    fontSize: '10px',
    letterSpacing: '0.12em',
    lineHeight: '138%',
  },
  'xl-subhead-bold': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'bold',
    fontSize: '24px',
    letterSpacing: '0.015em',
    lineHeight: '124%',
  },
  'lrg-subhead-bold': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'bold',
    fontSize: '22px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
  'med-subhead-bold': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
  'sm-subhead-bold': <FontDef>{
    themeFontFamily: 'body',
    themeFontWeight: 'bold',
    fontSize: '16px',
    letterSpacing: '-0.01em',
    lineHeight: '112%',
  },
};

export type FontDefName = keyof typeof defs;

export default defs;
