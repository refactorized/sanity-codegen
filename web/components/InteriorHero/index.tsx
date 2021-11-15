import styled from 'styled-components';
import {
  space,
  fontSize,
  fontFamily,
  lineHeight,
  query,
  fontWeight,
} from '@theme/fn';
import Image from 'next/image';
import Block from '@components/Layout/Block';

export interface InteriorHeroProps {
  header?: string;
  caption?: string;
  headerPadding?: boolean;
  alt_text?: string;
  imgUrls?: {
    desktop: string;
    mobile: string;
  };
  videoSrc?: string;
  narrow?: true; // Makes interior hero match width of prose blocks for detail apges
}

/*** STYLING ***/
const Container = styled.div`
  ${({narrow}) => narrow && `max-width: 768px;`}
`;
// Margin right on span to simulate a space
const HeaderCaptionWrapper = styled.div`
  @media (${query.atLeast('desktop')}) {
    padding: 0 ${({headerPadding}) => (headerPadding ? space('x10') : '0px')};
  }
`;

const Header = styled.h1`
  ${fontFamily('headline')};
  ${fontSize('x6')};
  ${lineHeight('headingSecondary')};
  ${fontWeight('regular')};
  margin-bottom: ${space('sm')};

  @media (${query.atLeast('tablet')}) {
    margin-bottom: ${space('md')};
  }

  @media (${query.atLeast('desktop')}) {
    ${fontSize('x8')};
  }
`;

const Caption = styled.p`
  ${fontSize('md')};
  margin-top: 0;
  ${lineHeight('heading')};
  ${fontFamily('body')};

  @media (${query.atLeast('tablet')}) {
    max-width: 509px;
  }

  @media (${query.atLeast('desktop')}) {
    ${fontSize('xl')};
    max-width: 658px;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
`;

export const InteriorHero = ({
  header,
  caption,
  alt_text,
  imgUrls,
  videoSrc,
  headerPadding = false,
  narrow,
}: InteriorHeroProps): JSX.Element => {
  return (
    <Block squish>
      <Container narrow={narrow}>
        {(header || caption) && (
          <HeaderCaptionWrapper headerPadding={headerPadding}>
            {header && <Header>{header}</Header>}
            {caption && <Caption>{caption}</Caption>}
          </HeaderCaptionWrapper>
        )}
        {imgUrls && imgUrls.desktop && (
          <Image
            alt={alt_text}
            src={imgUrls.desktop}
            layout="responsive"
            height={'auto'}
            width={'100%'}
            objectFit="cover"
          />
        )}

        {videoSrc && (
          <Video
            {...{
              muted: true,
              src: videoSrc,
              autoPlay: true,
              loop: true,
            }}
          />
        )}
      </Container>
    </Block>
  );
};
