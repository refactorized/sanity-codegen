import {GetStaticProps} from 'next';
import {previewClient as client} from '@data/sanityClient';
import {SanityImageAsset} from '@schema/types';
import log, {handler} from '@util/logging';
import Layout, {Block, AspectBox} from '@components/Layout';

import groq from 'groq';
import {default as NextImg, ImageProps as NextImageProps} from 'next/image';
import styled from 'styled-components';
import {MappedCardGrid} from 'pages/education-research/resources';

export const getStaticProps: GetStaticProps = async (context) => {
  const imgQuery = groq`*[_id=='image-ffa455456cf2689bc96e18c045d0970976d41b88-3840x2160-png']`;

  try {
    const imgData = (await client.fetch(imgQuery))[0];
    return {
      props: {imgData},
    };
  } catch (err) {
    handler(err);
    return null;
  }
};

const phi = 1.61803399;

const Code = styled.textarea`
  width: 60vw;
  height: 80vh;
`;

interface ImgProps {
  width?: string;
  aspect?: number;
  baseUrl: string;
  imageWidth?: number;
  imageHeight?: number;
  sizes?: any; ////////////////////////////////////////////////////
}

const ImgA = ({
  baseUrl,
  width = `${100 / phi}vw`,
  aspect = phi,
  sizes,
}: // imageWidth,
// imageHeight,
ImgProps) => {
  return (
    <AspectBox
      ratio={aspect}
      css={{
        width,
      }}
    >
      <NextImg {...{src: baseUrl, layout: 'fill', objectFit: 'cover', sizes}} />
    </AspectBox>
  );
};

const ImageTestsPage = ({imgData}: {imgData: SanityImageAsset}) => {
  return (
    <Layout>
      <Block>
        <NextImg
          src={imgData.url}
          width={imgData.metadata.dimensions.width}
          height={imgData.metadata.dimensions.height}
        />
      </Block>
      <Block>
        <NextImg src={imgData.url} width={500} height={500} />
      </Block>
      <Block>
        <ImgA baseUrl={imgData.url} />
      </Block>
      <Code children={JSON.stringify(imgData, null, 2)} />
    </Layout>
  );
};

export default ImageTestsPage;
