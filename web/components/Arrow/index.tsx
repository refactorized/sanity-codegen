import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import styled, {css} from 'styled-components';
import {color} from 'styled-system';

interface ArrowProps {
  stroke?: string;
  width?: number;
  height?: number;
}

interface CircleArrowProps {
  arrowColor?: string;
  circleColor?: string;
  width?: number;
  height?: number;
}

export const LeftArrow = ({
  stroke = 'black',
  width = 24,
  height = 24,
}: ArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12.0001H5"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 19.0001L5 12.0001L12 5.00008"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const RightArrow = ({
  stroke = 'black',
  width = 24,
  height = 25,
}: ArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12.3361L19 12.3361"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 5.33614L19 12.3361L12 19.3361"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const RightArrowNoLine = ({
  stroke = '#111',
  width = 8,
  height = 14,
}: ArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CircleArrow = ({
  arrowColor = 'white',
  circleColor = '#1B76B0',
  width = 58,
  height = 58,
}: CircleArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
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
