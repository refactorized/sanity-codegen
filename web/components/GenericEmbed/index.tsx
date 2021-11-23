import React from 'react';
import Block from '@components/Layout/Block';

export interface GenericEmbedProps {
  markup: string;
}

export const UnwrappedGenericEmbed = ({markup}: GenericEmbedProps) => (
  <div dangerouslySetInnerHTML={{__html: markup}} />
);

const GenericEmbed = (props: GenericEmbedProps) => (
  <Block>
    <UnwrappedGenericEmbed {...props} />
  </Block>
);

export default GenericEmbed;
