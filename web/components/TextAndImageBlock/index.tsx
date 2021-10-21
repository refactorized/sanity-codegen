import styled from 'styled-components';
import {
  color,
  space,
  typography,
  flexbox,
  layout,
  grid,
  size,
  letterSpacing,
} from 'styled-system';
import Image from 'next/image';
import {Button} from '@components/Button/';
import Block from '@components/Layout/Block';
import type {BasicText} from '@data/types';
import {RenderBasicText} from '@components/PortableText';

export interface TextAndImageBlockProps {
  header: string;
  imgUrls?: {
    desktop: string;
    mobile?: string;
  };
  subheader: string;
  caption: BasicText;
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

const Header = styled.h1`
  ${color}
  ${space}
  ${typography}
`;

const Subheader = styled.h2`
  ${color}
  ${space}
  ${typography}
  text-transform: uppercase;
`;

// For No Top Header Variant
const InnerHeader = styled.h1`
  ${color}
  ${space}
  ${typography}
`;

const Text = styled.div`
  ${color}
  ${space}
  ${typography}
  ${letterSpacing}

  p {
    margin: 0;
  }
`;

export const TextAndImageBlock = ({
  header,
  imgUrls,
  subheader,
  caption,
  btnText,
  btnUrl,
  reverse,
}: TextAndImageBlockProps): JSX.Element => {
  return (
    <Block>
      {header && (
        <Header
          fontFamily="headline"
          mx={[0]}
          mt={0}
          mb={[3, 3, 4]}
          fontSize={[4, 3, 5]}
          maxWidth={743}
          fontWeight="regular"
        >
          {header}
        </Header>
      )}
      <Box
        display="grid"
        gridTemplateColumns={
          reverse
            ? [
                '1fr',
                'minmax(280px, 450px) minmax(368px,1fr)',
                'minmax(453px, 1fr) minmax(auto,743px)',
              ]
            : [
                '1fr',
                'minmax(368px,1fr) minmax(280px, 450px)',
                'minmax(auto,743px) minmax(453px, 1fr)',
              ]
        }
        gridRowGap={0}
        gridColumnGap={[0, 3, 6]}
      >
        {/*/TODO: review image flexibility / responsiveness */}
        <Box display={['none', 'none', 'block']} width="100%">
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
        </Box>
        <Box
          mt={[4, 0, 0]}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gridRow={reverse ? 1 : 'unset'}
        >
          {header ? (
            <Subheader
              fontFamily="body"
              fontWeight="bold"
              m={0}
              fontSize={[0, '10px', 0]}
            >
              {subheader}
            </Subheader>
          ) : (
            <InnerHeader fontFamily="headline" m={0} fontSize={[4, 3, 5]}>
              {subheader}
            </InnerHeader>
          )}
          <Text
            lineHeight={['body', 'body', 'heading']}
            mt={[2, 1, 4]}
            mb={[4, 2, 4]}
            fontSize={[1, 0, 3]}
            fontFamily="body"
            letterSpacing={0}
          >
            <RenderBasicText asFragment content={caption} />
          </Text>
          <Button
            arrowColor="white"
            arrow={true}
            size="medium"
            variant="solid"
            url={btnUrl}
            label={btnText}
          />
        </Box>
      </Box>
    </Block>
  );
};
