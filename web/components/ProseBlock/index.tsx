import BlockContent from '@sanity/block-content-to-react';
import ProseBlockData from '../../data/blocks/ProseBlockData';
import Block from '../Layout/Block';
import log from '@util/logging';
import {Link as LikeType, PtImage} from '@data/types';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import stylers from './stylers';

interface propsSpan {
  children: React.ReactNode;
}

interface propsLink extends propsSpan {
  mark: {
    link: LikeType;
  };
}

interface propsPtImage {
  node: PtImage;
}

const BlockRenderer = (props) => {
  const {style = 'normal'} = props.node;

  if (stylers[style]) {
    const Component = stylers[style];
    return <Component {...props} />;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  marks: {
    sub: ({children}: propsSpan) => <sub>{children}</sub>,
    sup: ({children}: propsSpan) => <sup>{children}</sup>,
    link: ({children, mark}: propsLink) => {
      const url = mark.link?.slug?.current
        ? `/${mark.link.slug.current}`
        : mark.link?.url || '';
      return (
        <Link href={url}>
          <a>{children}</a>
        </Link>
      );
    },
  },
  types: {
    block: BlockRenderer,
    ptImage: (props: propsPtImage) => {
      log(`url: ${props?.node?.image?.asset?.url}`);
      return (
        <Image
          src={props.node?.image.asset.url || ''}
          width={props?.node?.image.asset.metadata.dimensions.width || 100}
          height={props?.node?.image.asset.metadata.dimensions.height || 100}
        />
      );
    },
  },
};

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  left: 0;
  top: 0;
  max-width: 768px;
`;

const ProseBlock = ({block}: {block: ProseBlockData}) => {
  return (
    <Block>
      <Wrapper>
        <BlockContent {...{blocks: block.content, serializers}} />
      </Wrapper>
    </Block>
  );
};

export default ProseBlock;

export const _map = (block: ProseBlockData) => (
  <ProseBlock key={block._key} block={block} />
);
