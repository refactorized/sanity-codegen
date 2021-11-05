import React from 'react';
import Block from '@components/Layout/Block';

export interface GenericEmbedProps {
  markup: string;
}

export const UnwrappedGenericEmbed = ({markup}: GenericEmbedProps) => (
  <div dangerouslySetInnerHTML={{__html: markup}} />
);

export default (props: GenericEmbedProps) => (
  <Block>
    <UnwrappedGenericEmbed {...props} />
  </Block>
);
