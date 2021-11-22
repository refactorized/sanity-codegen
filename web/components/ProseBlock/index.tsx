import BlockContent from '@sanity/block-content-to-react';
import ProseBlockData from '../../data/blocks/ProseBlockData';
import Block from '../Layout/Block';
import log from '@util/logging';
import {Link as LikeType} from '@data/types';
import Link from 'next/link';

import {PtEmbed, PtImage, PtFile, PtFloatBreak} from '@components/PortableText';

import styled from 'styled-components';
import stylers from './stylers';
import {fontFamily} from '@theme/fn';

interface propsSpan {
  children: React.ReactNode;
}

interface propsLink extends propsSpan {
  mark: {
    link: LikeType;
  };
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
    ptImage: PtImage,
    ptFile: PtFile,
    ptEmbed: PtEmbed,
    ptFloatBreak: PtFloatBreak,
  },
};

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  left: 0;
  top: 0;
  max-width: 768px;
  ${fontFamily('body')};
`;

const ProseBlock = ({block}: {block: ProseBlockData}) => {
  return (
    <Block squish>
      <Wrapper>
        <BlockContent {...{blocks: block?.content || [], serializers}} />
      </Wrapper>
    </Block>
  );
};

export default ProseBlock;

export const _map = (block: ProseBlockData) => (
  <ProseBlock key={block._key} block={block} />
);
