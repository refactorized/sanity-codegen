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
import {RenderBasicText} from '@components/PortableText';

export interface TextAndImageBlockProps {
  header: string;
  imgUrls?: {
    desktop: string;
    mobile: string;
  };
  subheader: string;
  caption: string;
  btnText?: string;
  btnUrl?: string;
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

const Text = styled.p`
  ${color}
  ${space}
  ${typography}
  ${letterSpacing}
`;

export const TextAndImageBlock = ({
  header = `Fresh Insights & a Century of Expertise`,
  imgUrls,
  subheader = `Education & Research`,
  caption = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  btnText = `Button Text`,
  btnUrl = `#`,
}: TextAndImageBlockProps): JSX.Element => {
  return (
    <Block>
      <Header
        fontFamily="body"
        mx={[0]}
        mt={0}
        mb={[3, 3, 4]}
        fontSize={[4, 3, 5]}
        maxWidth={743}
        fontWeight="regular"
      >
        {header}
      </Header>
      <Box
        display="grid"
        gridTemplateColumns={[
          '1fr',
          'minmax(368px,1fr) minmax(280px, 450px)',
          'minmax(auto,743px) minmax(453px, 1fr)',
        ]}
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
        >
          <Subheader
            fontFamily="headline"
            fontWeight="bold"
            m={0}
            fontSize={[0, '10px', 0]}
          >
            {subheader}
          </Subheader>
          <Text
            lineHeight={['body', 'body', 'heading']}
            mt={[2, 1, 4]}
            mb={[4, 2, 4]}
            fontSize={[1, 0, 3]}
            fontFamily="headline"
            letterSpacing={3}
          >
            <RenderBasicText content={caption} />
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
