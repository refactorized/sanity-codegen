import {ReactNode} from 'react';
import styled from 'styled-components';
import {fontStack} from '@theme/fn';

const DebugContainer = styled.pre`
  width: 100%;
  padding: 20px;
  border: dotted 3px pink;
  max-height: 22vh;
  overflow: hidden scroll;
`;

// only the stuff we are interested in
interface propsStyler {
  node?: {
    style?: string;
  };
  children?: ReactNode;
  [index: string]: any; // catchall
}

const BodyMd = styled.div`
  ${fontStack(['med-body-regular', 'med-body-regular', 'sm-body-regular'])}
`;
const BodySm = styled.div`
  ${fontStack(['sm-body-regular', 'sm-body-regular', 'sm-body-regular'])}
`;
const BodyXs = styled.div`
  ${fontStack(['xs-body-regular', 'xs-body-regular', 'xxs-body-regular'])}
`;
const Caption = styled.div`
  ${fontStack(['xs-body-regular', 'xs-body-regular', 'xxs-body-regular'])}
`;

const H2 = styled.h2`
  ${fontStack([
    'med-headline-regular',
    'lrg-headline-regular',
    'xl-headline-regular',
  ])}
`;

const H3 = styled.h2`
  ${fontStack([
    'sm-headline-regular',
    'med-headline-regular',
    'lrg-headline-regular',
  ])}
`;

const H4 = styled.h2`
  ${fontStack([
    'xs-headline-regular',
    'sm-headline-regular',
    'med-headline-regular',
  ])}
`;

const SubHead = styled.div`
  ${fontStack(['lrg-subhead-bold'])}
`;

const SubHeadSm = styled.div`
  ${fontStack(['sm-subhead-bold'])}
`;

const StyledQuoteSvg = styled.svg`
  width: 64px;
  height: 64px;
`;

const QuoteIcon = (props) => (
  <StyledQuoteSvg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path
      d="M35 32v20.1h20V32H41.8c0-7.4 6-13.4 13.4-13.4v-6.7C44.1 11.9 35 20.9 35 32zM9 32v20.1h20V32H15.7c0-7.4 6-13.4 13.5-13.4v-6.7C18 11.9 9 20.9 9 32Z"
      fill="#71976b"
    />
  </StyledQuoteSvg>
);

const StyledBlockquote = styled.blockquote`
  ${fontStack(['xs-body-regular', 'lrg-body-regular'])}
  font-style: italic;
  padding: 0;
`;

const BlockQuote = ({children}: propsStyler) => (
  <div>
    <QuoteIcon />
    <StyledBlockquote>{children}</StyledBlockquote>
  </div>
);

const stylers = {
  body_md: BodyMd,
  body_sm: BodySm,
  body_xs: BodyXs,
  caption: Caption,
  h2: H2,
  h3: H3,
  h4: H4,
  sub_head: SubHead,
  sub_head_sm: SubHeadSm,
  blockquote: BlockQuote,
};

export default stylers;
