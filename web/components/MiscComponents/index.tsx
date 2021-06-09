import React from 'react';
import {useState} from 'react';
import styled, {css} from 'styled-components';
import {color} from 'styled-system';

export interface MiscComponentsProps {
  color: string;
  hoverColor: string;
  link: string;
  size: string;
}

export const Search = ({
  color = '#1B76B0',
  hoverColor = 'black',
  link = 'https://www.google.com',
  size = '36',
}: MiscComponentsProps): JSX.Element => {
  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>
            <StyledPATH
              hoverColor={hoverColor}
              color={color}
              width={size}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path
                d="M6.417 11.083a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333zM12.25 12.25L9.713 9.712"
                stroke="#1B76B0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </StyledPATH>
          </span>
        </a>
      ) : (
        <span>
          <svg
            width={size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path
              d="M6.417 11.083a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333zM12.25 12.25L9.713 9.712"
              stroke={color}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      )}
    </>
  );
};

export const Phone = ({
  color = '#D15D34',
  hoverColor = 'black',
  link = '',
  size = '36',
}: MiscComponentsProps): JSX.Element => {
  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>
            <StyledSVG
              hoverColor={hoverColor}
              color={color}
              width={size}
              height={size}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 14"
            >
              <path d="M3.39.453a1.6 1.6 0 011.861.757l.06.119.529 1.177a1.998 1.998 0 01-.354 2.174l-.105.106-.835.778c-.15.142-.038.694.507 1.636.489.848.888 1.244 1.083 1.266h.034l.043-.008 1.64-.502a1.2 1.2 0 011.25.353l.075.092 1.084 1.504a1.6 1.6 0 01-.099 1.998l-.098.1-.434.412a2.8 2.8 0 01-2.972.564c-1.548-.624-2.954-2.05-4.232-4.263C1.147 6.498.615 4.564.853 2.908A2.8 2.8 0 012.663.677l.154-.051.573-.173z" />
            </StyledSVG>
          </span>
        </a>
      ) : (
        <span>
          <svg
            width={size}
            height={size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11 14"
          >
            <path
              d="M3.39.453a1.6 1.6 0 011.861.757l.06.119.529 1.177a1.998 1.998 0 01-.354 2.174l-.105.106-.835.778c-.15.142-.038.694.507 1.636.489.848.888 1.244 1.083 1.266h.034l.043-.008 1.64-.502a1.2 1.2 0 011.25.353l.075.092 1.084 1.504a1.6 1.6 0 01-.099 1.998l-.098.1-.434.412a2.8 2.8 0 01-2.972.564c-1.548-.624-2.954-2.05-4.232-4.263C1.147 6.498.615 4.564.853 2.908A2.8 2.8 0 012.663.677l.154-.051.573-.173z"
              fill={color}
            />
          </svg>
        </span>
      )}
    </>
  );
};

const StyledSVG = styled.svg`
  ${(props: {color: string; hoverColor: string}) =>
    css`
      fill: ${props.color};
      transition: ease-in 0.2s;
      &:hover {
        fill: ${props.hoverColor};
      }
    `}
`;

const StyledPATH = styled.svg`
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
