import styled from 'styled-components';
import {typography, flexbox, layout, grid, size} from 'styled-system';
import {
  color,
  space,
  fontFamily,
  fontWeight,
  fontSize,
  query,
  lineHeight,
  fontDef,
} from '@theme/fn';
import Image from 'next/image';
import {Button} from '@components/Button/';
import Block from '@components/Layout/Block';
import AspectBox from '@components/Layout/AspectBox';
import type {BasicText} from '@data/types';
import {RenderBasicText} from '@components/PortableText';

export interface TextAndImageBlockProps {
  altBg?: true;
  header?: string;
  imgUrls?: {
    desktop: string;
    mobile?: string;
  };
  alt_text?: string;
  subheader?: string;
  secondHeader?: string;
  caption: BasicText | string;
  btnText?: string;
  btnUrl?: string;
  reverse?: boolean;
}

/*** STYLING ***/
const Box = styled.div`
  ${color}
  ${typography}
  ${flexbox}
  ${space}
  ${layout}
  ${grid}
  ${size}
`;

const Container = styled.div`
  background-color: ${({altBg}) =>
    altBg ? color('cream') : color('background')};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0;
  grid-column-gap: 0;

  @media screen and (${query.atLeast('tablet')}) {
    grid-template-columns: ${({reverse}) =>
      reverse
        ? 'minmax(280px, 450px) minmax(368px,1fr)'
        : 'minmax(368px,1fr) minmax(280px, 450px)'};
    grid-column-gap: ${space('lg')};
  }

  @media screen and (${query.atLeast('desktop')}) {
    grid-template-columns: ${({reverse}) =>
      reverse
        ? 'minmax(453px, 1fr) minmax(auto,743px)'
        : 'minmax(auto,743px) minmax(453px, 1fr)'};
    grid-column-gap: ${space('x6')};
  }
`;

// const ImageContainer = styled.div`
//   display: block;
// `;

const ContentContainer = styled.div`
  margin-top: ${space('xl')};
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-row: 2;

  @media screen and (${query.atLeast('tablet')}) {
    margin-top: 0;
    grid-row: ${({reverse}) => (reverse ? 1 : 'unset')};
  }
`;

// <Box
//           mt={[4, 0, 0]}
//           display="flex"
//           justifyContent="center"
//           flexDirection="column"
//           gridRow={reverse ? 1 : 'unset'}
//         >
const Header = styled.h1`
  margin: 0 0 ${space('lg')};
  max-width: 743px;

  ${fontDef('lrg-headline-regular')};
  letter-spacing: -1%;
  @media screen and (${query.atLeast('desktop')}) {
    margin-bottom: ${space('xl')};
    ${fontSize('x6')}
  }
`;

const Eyebrow = styled.h3`
  text-transform: uppercase;
  ${fontDef('sm-eyebrow-bold')};

  @media screen and (${query.atLeast('tablet')}) {
    font-size: 10px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    ${fontSize('sm')};
  }

  margin-top: 0;
`;

{
  /* <Eyebrow
              fontFamily="body"
              fontWeight="bold"
              m={0}
              fontSize={[0, '10px', 0]}
            ></Eyebrow> */
}

// For No Top Header Variant
const InnerHeader = styled.h2`
  ${fontFamily('headline')};
  ${fontSize('x5')};
  margin: 0;

  @media screen and (${query.atLeast('tablet')}) {
    ${fontSize('xl')};
  }

  @media screen and (${query.atLeast('desktop')}) {
    ${fontSize('x6')};
  }
`;

{
  /* <InnerHeader fontFamily="headline" m={0} fontSize={[4, 3, 5]}></InnerHeader> */
}

const Text = styled.div`
  ${lineHeight('body')};
  ${fontSize('md')};
  ${fontFamily('body')};

  letter-spacing: 0;
  margin: ${space('md')} 0 ${space('xl')};

  p {
    margin: 0;
  }

  @media screen and (${query.atLeast('tablet')}) {
    margin: ${space('sm')} 0 ${space('md')};
    ${fontSize('sm')};
  }

  @media screen and (${query.atLeast('desktop')}) {
    margin: ${space('md')} 0 ${space('xl')};
    ${fontDef('lrg-body-regular')}
  }
`;

{
  /* <Text
            lineHeight={['body', 'body', 'heading']}
            mt={[2, 1, 4]}
            mb={[4, 2, 4]}
            fontSize={[1, 0, 3]}
            fontFamily="body"
            letterSpacing={0}
          ></Text> */
}

// SecondHeader used for Featured Resources / Courses
const SecondHeader = styled.h2`
  ${fontWeight('bold')};
  color: ${color('navy')};
  ${fontFamily('body')};
  ${fontSize('lg')};
  ${lineHeight('heading')};
  margin: 0;

  @media screen and (${query.atLeast('desktop')}) {
    ${fontSize('xl')};
  }
}
`;

export const TextAndImageBlock = ({
  altBg,
  header,
  imgUrls,
  alt_text,
  subheader,
  secondHeader,
  caption,
  btnText,
  btnUrl,
  reverse,
}: TextAndImageBlockProps): JSX.Element => {
  return (
    <Container altBg={altBg}>
      <Block>
        {header && <Header>{header}</Header>}
        <GridContainer reverse={reverse}>
          {/*/TODO: review image flexibility / responsiveness */}
          {/* <Box display={['none', 'none', 'block']} width="100%">
          <Image src={imgUrls.desktop} width={743} height={419} />
        </Box>
        <Box gridColumn={1} display={['none', 'block', 'none']} width="100%">
          <Image
            src={imgUrls.mobile || imgUrls.desktop}
            width={368}
            height={207.53}
          />
        </Box>
        <Box gridColumn={1} display={['block', 'none', 'none']} width="100%">
          <Image
            src={imgUrls.mobile || imgUrls.desktop}
            width={280}
            height={304}
          />
        </Box> */}
          <AspectBox ratio={[0.92, 1.66]}>
            <Image
              alt={alt_text}
              layout="fill"
              src={imgUrls.desktop}
              objectFit="cover"
            />
          </AspectBox>
          <ContentContainer reverse={reverse}>
            {header ? (
              <Eyebrow>{subheader}</Eyebrow>
            ) : (
              <InnerHeader>{subheader}</InnerHeader>
            )}
            {secondHeader && <SecondHeader>{secondHeader}</SecondHeader>}
            {typeof caption === 'object' ? (
              <Text>
                <RenderBasicText asFragment content={caption} />
              </Text>
            ) : (
              <Text>{caption}</Text>
            )}
            {btnUrl && btnText && (
              <Button
                arrowColor="white"
                arrow={true}
                size="medium"
                variant="solid"
                url={btnUrl}
                label={btnText}
              />
            )}
          </ContentContainer>
        </GridContainer>
      </Block>
    </Container>
  );
};
