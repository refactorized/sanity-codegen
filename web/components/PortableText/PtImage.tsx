import {PtImage as PtImageData} from '@data/types';
import Image from 'next/image';
import styled from 'styled-components';
import {mq} from '@theme/query';

type _styleProps = {
  align?: PtImageData['align'];
  wrap?: PtImageData['wrap'];
  widthName?: PtImageData['width'];
};

const widthsMap: {
  [key in _styleProps['widthName']]: string[];
} = {
  full: ['100%', '100%', '100%'],
  large: ['80%', '66%', ' 66%'],
  medium: ['66%', '50%', '50%'],
  small: ['50%', '33%', '33%'],
};

const widthFn = ({widthName}: _styleProps) => {
  return mq({width: widthsMap[widthName]});
};

const alignmentFn = ({align, wrap}: _styleProps) => {
  if (align === 'center') {
    return {
      margin: '0 auto !important',
    };
  }
  if (wrap) {
    return align === 'right'
      ? {
          float: 'right',
          margin: '16px 0 16px 16px !important',
        }
      : {
          float: 'left',
          margin: '16px 16px 16px 0 !important',
        };
  }
  return align === 'right'
    ? {margin: '0 0 0 auto !important'}
    : {margin: '0 auto 0 0 !important'};
};

const Wrapper = styled.div<_styleProps>`
  position: relative;
  width: 100%;
  & > div {
    ${mq({margin: ['8px', '16px']})}
    ${widthFn}
    ${alignmentFn}
  }
`;

const PtImage = (props: {node: PtImageData}) => {
  const styleProps: _styleProps = {
    align: props.node.align,
    wrap: props.node.wrap,
    widthName: props.node.width,
  };
  return (
    <Wrapper {...styleProps}>
      <Image
        layout="responsive"
        src={props.node?.image.asset.url || ''}
        width={props.node?.image.asset.metadata.dimensions.width || 100}
        height={props.node?.image.asset.metadata.dimensions.height || 100}
      />
    </Wrapper>
  );
};

export default PtImage;
