import React from 'react';
import styled, {css} from 'styled-components';

interface SingleQuoteProps {
  color?: string;
  width?: number;
  height?: number;
  style?: any;
}

export const SingleQuote = ({
  color = '#71976B',
  style = {},
}: SingleQuoteProps) => {
  return (
    <svg
      width="100%"
      preserveAspectRatio="xMinYMin meet"
      style={style}
      viewBox="0 0 15 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14.5v14.1h14.1V14.5H4.7c0-5.2 4.2-9.4 9.4-9.4V.4C6.3.4 0 6.7 0 14.5z"
        fill={color}
      />
    </svg>
  );
};
