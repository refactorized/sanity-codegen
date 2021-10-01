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
  header: string;
  caption: string;
  headerPadding?: boolean;
  imgUrls?: {
    desktop: string;
    mobile: string;
  };
  videoSrc: string;
}

/*** STYLING ***/
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

// const ImageWrapper = styled.div`
//   margin-bottom: ${space('xl')};

//   @media (${query.atLeast('tablet')}) {
//     margin-bottom: ${space('x5')};
//   }

//   @media (${query.atLeast('desktop')}) {
//     ${fontSize('xl')};
//     margin-bottom: ${space('x10')};
//   }
// `;

// const ImageMobile = styled(ImageWrapper)`
//   display: none;
//   @media (${query.below('tablet')}) {
//     display: block;
//   }
// `;

// const ImageTablet = styled(ImageWrapper)`
//   display: none;
//   @media (${query.atLeast('tablet')}) and (${query.below('desktop')}) {
//     display: block;
//   }
// `;

// const ImageDesktop = styled(ImageWrapper)`
//   @media (${query.atLeast('desktop')}) {
//     display: block;
//   }
// `;

const Video = styled.video`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
`;

export const InteriorHero = ({
  header,
  caption,
  imgUrls,
  videoSrc,
  headerPadding,
}: InteriorHeroProps): JSX.Element => {
  return (
    <>
      <Block squish narrow>
        <HeaderCaptionWrapper headerPadding={headerPadding}>
          <Header>{header}</Header>
          <Caption>{caption}</Caption>
        </HeaderCaptionWrapper>
      </Block>
      <Block squish>
        {imgUrls && imgUrls.desktop && (
          <Image
            src={imgUrls.desktop}
            layout="intrinsic"
            height={600}
            width={1272}
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
      </Block>
    </>
  );
};
