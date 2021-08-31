import BlockContent from '@sanity/block-content-to-react';
import {Fragment} from 'react';
import {BasicText} from '@schema/types';
import styled from 'styled-components';
import log from '@util/logging';

interface RenderBasicTextProps {
  content: BasicText;
  asSpan?: true;
  asFragment?: true;
  debug?: true;
}

const getWrap = (props: RenderBasicTextProps) => {
  if (props.asFragment) {
    return Fragment;
  }
  if (props.asSpan) {
    return styled.span``;
  }
  return styled.div``;
};

/* Accepts an array of portable text blocks, via the `content` prop and renders
them in a styled components div, which can be extended with
`styled(RenderBasicText)`. Setting the `asSpan` prop as true returns a stylable
span instead. Setting `asFrament` returns the blocks in a react Fragment,
effectively rendering them without a wrapping element'.

setting debug will log the `content` prop using `logging.json()` service */

const RenderBasicText = (props: RenderBasicTextProps) => {
  const Wrap = getWrap(props);
  if (props.debug) {
    log.json(props.content);
  }
  return (
    <Wrap>
      <BlockContent blocks={props.content} />
    </Wrap>
  );
};

export default RenderBasicText;
