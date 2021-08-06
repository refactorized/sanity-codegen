import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import styled, {css} from 'styled-components';
import {color} from 'styled-system';

interface ArrowProps {
  stroke?: string;
  size?: number;
  hoverColor?: string;
}

interface VideoArrowProps {
  arrowColor?: string;
  circleColor?: string;
  size?: number;
}

interface CircleArrowProps {
  arrowColor?: string;
  circleColor?: string;
  size?: number;
}

export const CircleArrow = ({
  arrowColor = 'white',
  circleColor = '#71976B',
  size = 25,
}: CircleArrowProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.5" cy="14.459" r="13.5" fill={circleColor} />
      <path d="M11.75 18.46l4.5-4.5-4.5-4.5" fill={circleColor} />
      <path
        d="M11.75 18.46l4.5-4.5-4.5-4.5"
        stroke={arrowColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LeftArrow = ({
  stroke = 'black',
  size = 24,
  hoverColor = '#71976B',
}: ArrowProps) => {
  return (
    <StyledSVG
      width={size}
      hoverColor={hoverColor}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12.0001H5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19.0001L5 12.0001L12 5.00008"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSVG>
  );
};

export const RightArrow = ({
  stroke = 'black',
  size = 24,
  hoverColor = '#71976B',
}: ArrowProps) => {
  return (
    <StyledSVG
      width={size}
      hoverColor={hoverColor}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12.3361L19 12.3361"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5.33614L19 12.3361L12 19.3361"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSVG>
  );
};

export const RightArrowNoLine = ({stroke = '#111', size = 8}: ArrowProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const VideoArrow = ({
  arrowColor = 'white',
  circleColor = '#1B76B0',
  size = 58,
}: VideoArrowProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29" cy="29" r="29" fill={circleColor} />
      <path
        d="M40.2424 27.9143C40.9091 28.2992 40.9091 29.2614 40.2424 29.6463L23.7992 39.1398C23.1326 39.5247 22.2992 39.0436 22.2992 38.2738V19.2868C22.2992 18.517 23.1326 18.0359 23.7992 18.4208L40.2424 27.9143Z"
        fill={arrowColor}
      />
    </svg>
  );
};

const StyledSVG = styled.svg`
  ${(props: {color: string; hoverColor: string}) =>
    css`
      path {
        stroke: ${props.color};
        transition: ease-in 0.2s;
      }
      &:hover {
        path {
          stroke: ${props.hoverColor};
        }
      }
    `}
`;
